import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import logoLight from '../../assets/images/logo_light.png';
import whatsappIcon from '../../assets/images/whatsapp.png';

const footerLinks = [
  { label: 'Inicio', href: '/#top' },
  { label: 'Nosotros', href: '/#about' },
  { label: 'Servicios', href: '/#services' },
  { label: 'Clientes', href: '/#clients' },
  { label: 'E-Partners Gym', href: '/gym' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400">
      <div className="container-max py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img src={logoLight} alt="e-partners logo" className="h-12 w-auto" />
            </div>
            <p className="text-sm leading-relaxed">
              Equipo estable de profesionales especializados en análisis, diseño, desarrollo y gestión de proyectos de software.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Navegación</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) =>
                link.href.startsWith('/#') ? (
                  <a key={link.label} href={link.href} className="text-sm hover:text-brand-green transition-colors">
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} to={link.href} className="text-sm hover:text-brand-teal transition-colors">
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                <span>Iturraspe 2223, San Francisco (Cba.), Argentina</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-green shrink-0" />
                <a href="https://wa.me/5493564688653" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
                  03564 - 15688653
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>© {new Date().getFullYear()} E-Partners S.R.L.™ — Todos los derechos reservados.</span>
          <span className="text-brand-green font-medium">San Francisco, Córdoba · Argentina</span>
        </div>
      </div>
    </footer>
  );
}
