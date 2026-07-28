import React from 'react';
import { MapSearch } from '../components/MapSearch';
import { ArrowDown } from 'lucide-react';
import './Home.css';

export function Home() {
  const scrollToMap = () => {
    document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content flex-col items-center justify-center text-center">
          <span className="hero-badge glass">Corrientes Capital</span>
          <h1 className="hero-title">
            Encontrá el lugar perfecto <br /> para tu próxima historia
          </h1>
          <p className="hero-subtitle">
            Descubrí las mejores casas, departamentos y terrenos en la ciudad de Corrientes.
            Experiencia premium, fácil y rápida.
          </p>
          <button className="btn btn-primary hero-btn hover-scale" onClick={scrollToMap}>
            Explorar Propiedades <ArrowDown size={20} />
          </button>
        </div>
      </section>

      {/* Map Search Section */}
      <section id="map-section">
        <MapSearch />
      </section>
    </div>
  );
}
