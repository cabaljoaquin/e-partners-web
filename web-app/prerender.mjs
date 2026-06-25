// Pre-render estático de las rutas del SPA usando un navegador real (Puppeteer).
// Genera dist/index.html (home) y dist/<ruta>/index.html con el contenido ya
// renderizado, para que crawlers y previews sociales reciban HTML completo.
// Se ejecuta DESPUÉS de `vite build` (ver script "build" en package.json).

import http from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const PORT = 4999;

// Rutas a pre-renderizar (páginas indexables). /gym queda fuera a propósito:
// no se promociona ni se indexa (ver robots.txt). Sigue accesible por URL directa
// como ruta de cliente vía el fallback de SPA del web.config.
const ROUTES = ['/'];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

// Servidor estático mínimo con fallback de SPA hacia index.html.
const server = http.createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    let filePath = path.join(DIST, urlPath);

    if (urlPath.endsWith('/')) filePath = path.join(filePath, 'index.html');
    if (!existsSync(filePath) && !path.extname(filePath)) {
      filePath = path.join(DIST, 'index.html'); // ruta de cliente -> shell
    }
    if (!existsSync(filePath)) filePath = path.join(DIST, 'index.html');

    const data = await readFile(filePath);
    res.setHeader('Content-Type', MIME[path.extname(filePath)] || 'application/octet-stream');
    res.end(data);
  } catch {
    res.statusCode = 500;
    res.end('prerender static server error');
  }
});

await new Promise((resolve) => server.listen(PORT, resolve));

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 900 });
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });

    const REVEAL = process.env.PRERENDER_REVEAL !== '0';
    if (REVEAL) {
      // Recorre la página para disparar las animaciones whileInView (framer-motion)
      // y cualquier carga diferida, y vuelve arriba antes de capturar.
      await page.evaluate(
        () =>
          new Promise((resolve) => {
            let y = 0;
            const step = () => {
              window.scrollBy(0, window.innerHeight);
              y += window.innerHeight;
              if (y < document.body.scrollHeight) setTimeout(step, 120);
              else {
                window.scrollTo(0, 0);
                setTimeout(resolve, 400);
              }
            };
            step();
          })
      );

      await new Promise((r) => setTimeout(r, 500));

      // Neutraliza el estado inicial de las animaciones de framer-motion: cualquier
      // elemento que haya quedado con opacity<1 / transform de entrada se fija a su
      // estado final, para que el HTML estático muestre el contenido aun sin JS.
      await page.evaluate(() => {
        document.querySelectorAll('[style*="opacity"]').forEach((el) => {
          const o = el.style.opacity;
          if (o !== '' && parseFloat(o) < 1) {
            el.style.opacity = '1';
            el.style.transform = 'none';
          }
        });
      });
    }

    const html = await page.content();
    const outDir = route === '/' ? DIST : path.join(DIST, route);
    await mkdir(outDir, { recursive: true });
    const outFile = path.join(outDir, 'index.html');
    await writeFile(outFile, html, 'utf-8');
    console.log(`✓ prerender ${route} -> ${path.relative(__dirname, outFile)}`);
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}
