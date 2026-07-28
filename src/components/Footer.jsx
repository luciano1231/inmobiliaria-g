import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin, Globe, MessageCircle } from 'lucide-react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C360,100 720,0 1440,60 L1440,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="footer-content container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand fade-in-section">
            <Link to="/" className="footer-logo flex items-center gap-2">
              <Home size={24} />
              <span>Inmobi<span className="font-light">Premium</span></span>
            </Link>
            <p className="footer-tagline">
              Tu próxima historia comienza con nosotros. Propiedades premium en Corrientes Capital.
            </p>
            <div className="footer-socials flex gap-4">
              <a href="#" aria-label="Redes Sociales" className="social-icon">
                <Globe size={20} />
              </a>
              <a href="#" aria-label="Contacto" className="social-icon">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links fade-in-section">
            <h4>Navegación</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/admin">Panel Admin</Link></li>
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Términos y Condiciones</a></li>
            </ul>
          </div>

          {/* Property Types */}
          <div className="footer-links fade-in-section">
            <h4>Propiedades</h4>
            <ul>
              <li><a href="#">Casas en venta</a></li>
              <li><a href="#">Departamentos</a></li>
              <li><a href="#">Terrenos</a></li>
              <li><a href="#">Alquileres</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact fade-in-section">
            <h4>Contacto</h4>
            <ul>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Corrientes Capital, Argentina</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+5491112345678">+54 9 11 1234-5678</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@inmobipremium.com">info@inmobipremium.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} InmobiPremium. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
