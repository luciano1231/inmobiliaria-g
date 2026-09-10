import React, { useState } from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { FadeGallery } from '../../../components/FadeGallery';
import { SkillMapSection } from '../../../components/SkillMapSection';
import { ArrowUpRight, MapPin } from 'lucide-react';
import './ModelImageToCode.css';

export function ModelImageToCode() {
  const [activeProperty, setActiveProperty] = useState(mockProperties[0]);
  const [tipo, setTipo] = useState('Todos');

  const catalogo = tipo === 'Todos'
    ? mockProperties
    : mockProperties.filter((p) => p.type === tipo);

  return (
    <div className="img2code-page">
      <SkillFloatingBar />

      {/* HEADER SECTION */}
      <header className="img2code-header">
        <div className="img2code-container">
          <div className="fidelity-badge">
            <span>CATÁLOGO EDITORIAL • CORRIENTES</span>
          </div>

          <h1 className="img2code-h1">
            Propiedades con fichas claras, fotos grandes y datos precisos.
          </h1>

          <p className="img2code-lead">
            Cada inmueble se presenta con su galería, sus metros reales y su ubicación exacta.
            Elegí una propiedad para verla en grande y recorré el catálogo completo debajo.
          </p>

          <div className="img2code-filter-bar">
            {['Todos', 'Casa', 'Departamento', 'Terreno'].map((t) => (
              <button
                key={t}
                onClick={() => setTipo(t)}
                className={`img2code-filter-btn ${tipo === t ? 'active' : ''}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* SHOWCASE: PROPIEDAD ACTIVA */}
      <main className="img2code-main">
        <div className="img2code-container">
          <div className="dual-hero-stage">
            <div className="stage-image-hero">
              <FadeGallery images={activeProperty.images} alt={activeProperty.title} height="420px" />
              <div className="stage-image-overlay">
                <span className="live-rendered-tag">{activeProperty.operation}</span>
                <span className="live-price-tag">{activeProperty.priceLabel}</span>
              </div>
            </div>

            <div className="stage-data-card">
              <span className="stage-loc"><MapPin size={13} /> {activeProperty.location}</span>
              <h2 className="stage-title">{activeProperty.title}</h2>
              <p className="stage-desc">{activeProperty.description}</p>

              <div className="specs-grid-visual">
                <div className="spec-tile">
                  <span>METRAJE</span>
                  <strong>{activeProperty.area} m²</strong>
                </div>
                <div className="spec-tile">
                  <span>DORMITORIOS</span>
                  <strong>{activeProperty.bedrooms || 0}</strong>
                </div>
                <div className="spec-tile">
                  <span>COCHERA</span>
                  <strong>{activeProperty.garage ? 'Sí' : 'No'}</strong>
                </div>
              </div>

              <div className="stage-actions">
                <a
                  href={`https://wa.me/${activeProperty.whatsapp}?text=${encodeURIComponent(`Hola, quiero más información sobre: ${activeProperty.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="stage-primary-btn"
                >
                  <span>Consultar por WhatsApp</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* CATÁLOGO COMPLETO */}
          <div className="selector-bar-section">
            <h3>Catálogo completo · {catalogo.length} propiedades</h3>
            <div className="thumbnail-track">
              {catalogo.map((prop) => (
                <div
                  key={prop.id}
                  onClick={() => setActiveProperty(prop)}
                  className={`thumb-item ${activeProperty.id === prop.id ? 'active' : ''}`}
                >
                  <FadeGallery images={prop.images} alt={prop.title} height="150px" showDots={false} />
                  <div className="thumb-info">
                    <strong>{prop.title}</strong>
                    <span>{prop.priceLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <SkillMapSection
        properties={catalogo}
        variant="blueprint"
        accent="#38bdf8"
        tone="dark"
        label="Ubicaciones"
        title="Dónde está cada propiedad del catálogo"
        note="Cada marcador enlaza a la ficha completa de la propiedad."
      />

      {/* FOOTER */}
      <footer className="img2code-footer">
        <div className="img2code-container footer-row-clean">
          <div>
            <strong>INMOBILIARIA G • CORRIENTES</strong>
            <p>Casas, departamentos y lotes en Corrientes y alrededores</p>
          </div>
          <div className="credit-tag">
            <span>Contacto directo</span>
            <small>WhatsApp 3794675203</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
