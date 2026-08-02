import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-header">
        <h1>Modelos Inmobiliarios</h1>
        <p>Seleccioná el diseño que mejor se adapte a tu marca</p>
      </div>

      <div className="models-grid container">
        {/* Card Modelo 1 */}
        <div className="model-card">
          <div className="model-image">
            <img src="/inmobiliaria-g/images/front-door-house.jpg" alt="Modelo 1" />
            <div className="model-overlay">
              <Link to="/model-1" className="btn btn-primary">Ver Modelo 1</Link>
            </div>
          </div>
          <div className="model-info">
            <h3>Modelo 1</h3>
            <p>Diseño claro, confiable y directo al punto. Ideal para una navegación sencilla.</p>
          </div>
        </div>

        {/* Card Modelo 2 */}
        <div className="model-card">
          <div className="model-image">
            <img src="/inmobiliaria-g/images/arquitectura-moderna-apartamentos_1268-14696.avif" alt="Modelo 2" />
            <div className="model-overlay">
              <Link to="/model-2" className="btn btn-primary">Ver Modelo 2</Link>
            </div>
          </div>
          <div className="model-info">
            <h3>Modelo 2</h3>
            <p>Estética oscura y elegante. Ideal para propiedades exclusivas y de alto valor.</p>
          </div>
        </div>
      </div>

      <footer className="landing-footer">
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
