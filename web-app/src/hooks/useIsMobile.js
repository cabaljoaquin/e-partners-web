import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

// Detecta mobile sin romper la hidratación: arranca en `false` para coincidir
// con el HTML pre-renderizado (que se genera a 1366px / desktop) y se corrige
// tras montar en el cliente. Evita el mismatch de hidratación y el CLS.
export function useIsMobile(breakpoint = MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isMobile;
}
