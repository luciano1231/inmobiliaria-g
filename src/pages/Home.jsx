import React, { useEffect } from 'react';
import { MapSearch } from '../components/MapSearch';
import { Footer } from '../components/Footer';
import { ArrowDown } from 'lucide-react';
import './Home.css';

export function Home() {
  const scrollToMap = () => {
    document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
  };

  // Intersection Observer for fade-in-section elements
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

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section with Parallax */}
      <section className="hero-section">
        <div className="hero-parallax-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content flex-col items-center justify-center text-center">
          <span className="hero-badge">Corrientes Capital</span>
          <h1 className="hero-title">
            Encontrá el lugar perfecto <br />para tu próxima historia
          </h1>
          <p className="hero-subtitle">
            Descubrí las mejores casas, departamentos y terrenos en la ciudad de Corrientes.
            Experiencia premium, fácil y rápida.
          </p>
          <button className="btn btn-primary hero-btn hover-scale" onClick={scrollToMap}>
            Explorar Propiedades <ArrowDown size={20} />
          </button>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </section>

      {/* Map Search Section */}
      <section id="map-section">
        <MapSearch />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
