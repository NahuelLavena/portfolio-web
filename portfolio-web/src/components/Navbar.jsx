import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">
          <span className="logo-text">Tu Marca</span>
        </a>
        
        <button 
          className={`navbar-hamburger ${mobileMenuOpen ? 'is-active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${mobileMenuOpen ? 'is-open' : ''}`}>
          <button onClick={() => scrollToSection('servicios')} className="navbar-link">
            Servicios
          </button>
          <button onClick={() => scrollToSection('proyectos')} className="navbar-link">
            Proyectos
          </button>
          <button onClick={() => scrollToSection('faq')} className="navbar-link">
            FAQ
          </button>
          <button onClick={() => scrollToSection('contacto')} className="navbar-cta">
            Contactar
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;