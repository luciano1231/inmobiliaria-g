import React, { useEffect } from 'react';
import { MapSearch } from '../components/MapSearch';
import { Footer } from '../components/Footer';
import { ArrowDown } from 'lucide-react';
import './Model2.css';

export function Model2() {
  const scrollToMap = () => {
    document.getElementById('map-section-m2').scrollIntoView({ behavior: 'smooth' });
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

    const elements = document.querySelectorAll('.fade-in-m2');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="model2-page">
      {/* Hero Section */}
      <section className="hero-section-m2">
        <div className="hero-bg-m2"></div>
        <div className="hero-overlay-m2"></div>
        <div className="container hero-content-m2 flex-col items-center justify-center text-center fade-in-m2">
          <span className="hero-badge-m2">Exclusividad & Elegancia</span>
          <h1 className="hero-title-m2">
            Descubre Propiedades Únicas
          </h1>
          <p className="hero-subtitle-m2">
            Tu próximo nivel de vida te espera en las ubicaciones más selectas de Corrientes.
          </p>
          <button className="btn-m2 hover-scale-m2" onClick={scrollToMap}>
            Ver Propiedades <ArrowDown size={20} />
          </button>
        </div>
      </section>

      {/* Map Search Section */}
      <section id="map-section-m2" className="fade-in-m2">
        <div className="map-container-m2">
          <h2 className="section-title-m2">Ubicaciones Premium</h2>
          <MapSearch />
        </div>
      </section>

      {/* Footer Inmobiliaria */}
      <Footer />

      {/* Footer Personal */}
      <footer className="landing-footer" style={{ borderTop: '1px solid #333' }}>
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
