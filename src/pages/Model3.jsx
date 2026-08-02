import React, { useEffect } from 'react';
import { MapSearch } from '../components/MapSearch';
import { ArrowDown, Leaf, MapPin, Phone, Mail, Home, Star, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Model3.css';

export function Model3() {
  const scrollToMap = () => {
    document.getElementById('map-section-m3').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-m3');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="model3-page">
      {/* Navbar propia */}
      <nav className="navbar-m3">
        <div className="navbar-m3-inner">
          <div className="navbar-m3-logo">
            <Leaf size={28} />
            <span>Habitat<span className="logo-light-m3">Corrientes</span></span>
          </div>
          <div className="navbar-m3-links">
            <a href="#about-m3">Nosotros</a>
            <a href="#map-section-m3">Propiedades</a>
            <a href="#contact-m3">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section – split layout */}
      <section className="hero-section-m3">
        <div className="hero-left-m3 fade-in-m3">
          <span className="hero-tag-m3">
            <Leaf size={14} /> Vivir en armonía
          </span>
          <h1 className="hero-title-m3">
            Tu hogar ideal <br />en Corrientes
          </h1>
          <p className="hero-subtitle-m3">
            Conectamos personas con espacios que inspiran. Encontrá casas, departamentos y terrenos
            rodeados de naturaleza y comodidad en la capital correntina.
          </p>
          <button className="btn-m3" onClick={scrollToMap}>
            Explorar propiedades <ArrowDown size={18} />
          </button>
        </div>
        <div className="hero-right-m3">
          <div className="hero-img-m3">
            <img src="/inmobiliaria-g/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg" alt="Casa con jardín" />
          </div>
          <div className="hero-stat-m3 fade-in-m3">
            <Star size={20} />
            <div>
              <strong>+200</strong>
              <span>Propiedades listadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* About / Features */}
      <section id="about-m3" className="about-section-m3">
        <h2 className="section-title-m3 fade-in-m3">¿Por qué elegir <span className="accent-m3">Habitat</span>?</h2>
        <div className="features-grid-m3">
          <div className="feature-card-m3 fade-in-m3">
            <div className="feature-icon-m3"><Shield size={32} /></div>
            <h3>Seguridad</h3>
            <p>Todas nuestras propiedades están verificadas y con documentación al día.</p>
          </div>
          <div className="feature-card-m3 fade-in-m3">
            <div className="feature-icon-m3"><Users size={32} /></div>
            <h3>Asesoría Personalizada</h3>
            <p>Un equipo dedicado te acompaña en cada paso del proceso.</p>
          </div>
          <div className="feature-card-m3 fade-in-m3">
            <div className="feature-icon-m3"><MapPin size={32} /></div>
            <h3>Ubicaciones Estratégicas</h3>
            <p>Propiedades en los barrios más buscados y con mejor conectividad.</p>
          </div>
        </div>
      </section>

      {/* Map Search Section */}
      <section id="map-section-m3" className="map-section-m3">
        <h2 className="section-title-m3 fade-in-m3">Explorá el <span className="accent-m3">mapa</span></h2>
        <p className="section-desc-m3 fade-in-m3">Hacé clic en los marcadores para descubrir propiedades cerca tuyo.</p>
        <div className="map-wrapper-m3 fade-in-m3">
          <MapSearch />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-m3 fade-in-m3">
        <div className="cta-content-m3">
          <h2>¿Listo para encontrar tu lugar?</h2>
          <p>Contactanos hoy y empezá a recorrer las mejores opciones del mercado correntino.</p>
          <a href="https://wa.me/5493794675203" target="_blank" rel="noopener noreferrer" className="btn-m3 btn-cta-m3">
            Escribinos por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer Inmobiliaria */}
      <footer id="contact-m3" className="footer-m3">
        <div className="footer-m3-grid">
          <div className="footer-m3-brand">
            <div className="footer-m3-logo">
              <Leaf size={24} />
              <span>Habitat<span className="logo-light-m3">Corrientes</span></span>
            </div>
            <p>Conectamos personas con los espacios donde comienzan sus mejores historias.</p>
          </div>
          <div className="footer-m3-links-col">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#about-m3">Nosotros</a></li>
              <li><a href="#map-section-m3">Propiedades</a></li>
              <li><a href="#contact-m3">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-m3-links-col">
            <h4>Contacto</h4>
            <ul>
              <li><MapPin size={14} /> Corrientes Capital, Argentina</li>
              <li><Phone size={14} /> +54 379 467-5203</li>
              <li><Mail size={14} /> info@habitatcorrientes.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-m3-bottom">
          <p>&copy; {new Date().getFullYear()} Habitat Corrientes. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Footer Personal */}
      <footer className="landing-footer" style={{ borderTop: '1px solid #d4d0c8' }}>
        <div className="landing-footer-content">
          <h3>Luciano Gonzalez Jensen</h3>
          <p>Consultoría informática y las demás cosas que hago.</p>
          <div className="contact-info">
            <a href="https://wa.me/5493794675203" target="_blank" rel="noopener noreferrer" className="contact-btn">
              Contactar por WhatsApp: 3794675203
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
