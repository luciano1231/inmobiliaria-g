import React, { useState } from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { FadeGallery } from '../../../components/FadeGallery';
import { SkillMapSection } from '../../../components/SkillMapSection';
import { ArrowRight, Compass, Home, KeyRound, MapPin, Sparkles } from 'lucide-react';
import './ModelMinimalist.css';

export function ModelMinimalist() {
  const [selectedOperation, setSelectedOperation] = useState('Venta');
  
  const properties = mockProperties.filter(p => p.operation === selectedOperation);

  return (
    <div className="minimalist-page">
      <SkillFloatingBar 
        skillName="minimalist-skill" 
        skillTitle="Premium Utilitarian Minimalism" 
        archetype="Warm Monochrome & Editorial Serif" 
      />

      {/* HEADER SECTION */}
      <header className="minimalist-header">
        <div className="minimalist-container">
          <div className="editorial-meta-tag">
            <span className="badge-pastel-green">Catálogo Curado</span>
            <span className="editorial-date">Vol. 2026 — Edición Corrientes</span>
          </div>

          <h1 className="minimalist-h1">
            Espacios habitables con serenidad arquitectónica.
          </h1>

          <p className="minimalist-lead">
            Una selección sobria de residencias particulares, apartamentos y parcelas en la provincia de Corrientes. Proyectos diseñados para perdurar en el tiempo.
          </p>

          {/* MINIMAL CONTROL BAR */}
          <div className="minimal-controls">
            <div className="segmented-control">
              <button 
                className={`segment-btn ${selectedOperation === 'Venta' ? 'active' : ''}`}
                onClick={() => setSelectedOperation('Venta')}
              >
                Comprar
              </button>
              <button 
                className={`segment-btn ${selectedOperation === 'Alquiler' ? 'active' : ''}`}
                onClick={() => setSelectedOperation('Alquiler')}
              >
                Alquilar
              </button>
            </div>
            
            <div className="shortcut-hint">
              Presione <kbd>W</kbd> para contacto directo o consulte cada propiedad
            </div>
          </div>
        </div>
      </header>

      {/* EDITORIAL BENTO GRID */}
      <main className="minimalist-main">
        <div className="minimalist-container">
          <div className="minimalist-bento-grid">
            {properties.map((prop, idx) => {
              const isLarge = idx === 0 || idx === 3;
              return (
                <article 
                  key={prop.id} 
                  className={`bento-card ${isLarge ? 'bento-span-2' : ''}`}
                >
                  <div className="bento-media">
                    <FadeGallery
                      images={prop.images}
                      alt={prop.title}
                      height={isLarge ? '320px' : '240px'}
                    />
                    <span className="bento-badge">
                      {prop.type}
                    </span>
                  </div>

                  <div className="bento-content">
                    <div className="bento-top-row">
                      <span className="bento-location"><MapPin size={13} /> {prop.location}</span>
                      <span className="bento-price">{prop.priceLabel}</span>
                    </div>

                    <h2 className="bento-title">{prop.title}</h2>
                    <p className="bento-desc">{prop.description}</p>

                    <div className="bento-specs">
                      <span>{prop.area} m² superficie</span>
                      <span>•</span>
                      <span>{prop.bedrooms || 0} dorm.</span>
                      <span>•</span>
                      <span>{prop.bathrooms || 0} baños</span>
                    </div>

                    <div className="bento-footer">
                      <div className="bento-tags">
                        {prop.amenities?.slice(0, 2).map((f, i) => (
                          <span key={i} className="pastel-tag">{f}</span>
                        ))}
                      </div>

                      <a 
                        href={`https://wa.me/${prop.whatsapp}?text=Hola,%20me%20interesa%20la%20propiedad:%20${encodeURIComponent(prop.title)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bento-cta"
                      >
                        Consultar <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* EDITORIAL ESSAY SECTION */}
          <section className="minimalist-philosophy">
            <div className="philosophy-box">
              <span className="philosophy-label">Manifiesto de Criterio</span>
              <h3>No comercializamos metros cuadrados, asistimos proyectos de vida.</h3>
              <p>
                Cada propiedad en nuestra cartera atraviesa un proceso de tasación técnica, verificación de títulos notariales y análisis de habitabilidad y orientación solar.
              </p>
              <div className="philosophy-stats">
                <div>
                  <strong>{mockProperties.length}</strong>
                  <span>Propiedades Verificadas</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Títulos en Regla</span>
                </div>
                <div>
                  <strong>0%</strong>
                  <span>Comisiones Ocultas</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SkillMapSection
        properties={mockProperties}
        variant="mono"
        accent="#9F2F2D"
        tone="light"
        label="Mapa del catálogo"
        title="Dónde está cada propiedad"
        note="Ubicaciones reales en Corrientes capital y localidades cercanas. Seleccioná un punto para abrir la ficha."
      />

      <footer className="minimalist-footer">
        <div className="minimalist-container footer-flex">
          <div>
            <h4>Inmobiliaria G • Luciano Jensen</h4>
            <p>Corrientes, Argentina. Arquitectura, tasaciones y gestión patrimonial.</p>
          </div>
          <div className="skill-signature">
            <span>Contacto directo</span>
            <small>WhatsApp 3794675203 &middot; Corrientes Capital</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
