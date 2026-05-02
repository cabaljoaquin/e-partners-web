import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoLight from '../../assets/images/logo_light.png';
import logoDark from '../../assets/images/logo_dark.png';

const NAV_LINKS = [
  { label: 'Inicio', href: '/#top', isAnchor: true },
  { label: 'Nosotros', href: '/#about', isAnchor: true },
  { label: 'Servicios', href: '/#services', isAnchor: true },
  { label: 'Clientes', href: '/#clients', isAnchor: true },
  // { label: 'E-Partners Gym', href: '/gym', isAnchor: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('/#', '').replace('#', '');
    const el = document.getElementById(id === 'top' ? 'hero' : id);
    
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src={scrolled ? logoDark : logoLight} 
            alt="e-partners logo" 
            className="h-10 w-auto group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            link.isAnchor ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`nav-link px-4 py-2 rounded-lg hover:bg-brand-green/10 hover:text-brand-green ${
                  scrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`nav-link px-4 py-2 rounded-lg ml-2 ${
                  location.pathname === link.href
                    ? 'bg-brand-green text-white shadow-brand'
                    : `border ${scrolled ? 'border-brand-green text-brand-green' : 'border-white/40 text-white'} hover:bg-brand-green hover:text-white hover:border-brand-green`
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-brand-navy' : 'text-white'}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-slate-100 shadow-lg overflow-hidden"
          >
            <nav className="container-max py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                link.isAnchor ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { 
                      handleAnchorClick(e, link.href); 
                      setTimeout(() => setMenuOpen(false), 150); 
                    }}
                    className="nav-link px-4 py-3 rounded-xl text-slate-700 hover:bg-brand-greenLight hover:text-brand-green"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="nav-link px-4 py-3 rounded-xl text-white bg-gradient-brand text-center mt-2 shadow-brand"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
