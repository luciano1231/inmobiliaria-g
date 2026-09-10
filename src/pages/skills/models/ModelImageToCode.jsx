import React, { useState } from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { FadeGallery } from '../../../components/FadeGallery';
import { SkillMapSection } from '../../../components/SkillMapSection';
import { Image, Code, Eye, ArrowUpRight, Check, MapPin, Maximize2 } from 'lucide-react';
import './ModelImageToCode.css';

export function ModelImageToCode() {
  const [activeProperty, setActiveProperty] = useState(mockProperties[0]);
  const [showCodePreview, setShowCodePreview] = useState(false);

  return (
    <div className="img2code-page">
      <SkillFloatingBar 
        skillName="image-to-code-skill" 
        skillTitle="Image-to-Code Visual Fidelity" 
        archetype="Design Reference to Pixel-Perfect Implementation" 
      />

      {/* HEADER SECTION */}
      <header className="img2code-header">
        <div className="img2code-container">
          <div className="fidelity-badge">
            <Code size={13} />
            <span>IMAGE-TO-CODE DIRECTIVE • HIGH PIXEL FIDELITY</span>
          </div>

          <h1 className="img2code-h1">
            Fidelidad visual absoluta: Del render a la realidad inmobiliaria.
          </h1>

          <p className="img2code-lead">
            Implementación fiel de diseño arquitectónico. Cada ficha técnica reproduce con exactitud las proporciones, planos y distribución de las propiedades más destacadas de Corrientes.
          </p>

          <div className="toggle-code-bar">
            <button 
              onClick={() => setShowCodePreview(!showCodePreview)}
              className="code-toggle-btn"
            >
              {showCodePreview ? 'Ocultar Blueprint Técnico' : 'Ver Blueprint & Token Specs'}
            </button>
          </div>

          {showCodePreview && (
            <div className="code-dossier-panel">
              <pre>
{`// SPECIFICATION TOKENS //
{
  "theme": "Editorial Blueprint",
  "canvas": "#0f141c",
  "accent": "#38bdf8",
  "elevation": "0 15px 35px rgba(0,0,0,0.5)",
  "activePropertyId": "${activeProperty.id}",
  "title": "${activeProperty.title}",
  "coordinates": "${activeProperty.coordinates?.[0]}, ${activeProperty.coordinates?.[1]}"
}`}
              </pre>
            </div>
          )}
        </div>
      </header>

      {/* DUAL SHOWCASE: DESIGN ARTWORK & ACTIVE PROPERTY */}
      <main className="img2code-main">
        <div className="img2code-container">
          <div className="dual-hero-stage">
            <div className="stage-image-hero">
              <FadeGallery images={activeProperty.images} alt={activeProperty.title} height="420px" />
              <div className="stage-image-overlay">
                <span className="live-rendered-tag">RENDER FIEL</span>
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
                  <span>OPERACIÓN</span>
                  <strong>{activeProperty.operation}</strong>
                </div>
              </div>

              <div className="stage-actions">
                <a 
                  href={`https://wa.me/${activeProperty.whatsapp}?text=Consulta%20Image-to-Code:%20${encodeURIComponent(activeProperty.title)}`}
                  target="_blank" 
                  rel="noreferrer" 
                  className="stage-primary-btn"
                >
                  <span>Solicitar Carpeta Técnica</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* GALLERY CAROUSEL / SELECTOR */}
          <div className="selector-bar-section">
            <h3>Seleccionar Propiedad para Renderizar</h3>
            <div className="thumbnail-track">
              {mockProperties.slice(0, 6).map(prop => (
                <div 
                  key={prop.id}
                  onClick={() => setActiveProperty(prop)}
                  className={`thumb-item ${activeProperty.id === prop.id ? 'active' : ''}`}
                >
                  <img src={prop.images[0]} alt={prop.title} />
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
        properties={mockProperties}
        variant="blueprint"
        accent="#38bdf8"
        tone="dark"
        label="Blueprint geoespacial"
        title="Del render al plano: ubicación exacta"
        note="Implementación fiel también en el mapa. Cada marcador enlaza a la carpeta técnica de la propiedad."
      />

      {/* FOOTER */}
      <footer className="img2code-footer">
        <div className="img2code-container footer-row-clean">
          <div>
            <strong>INMOBILIARIA G • IMAGE-TO-CODE ENGINE</strong>
            <p>Diseño y ejecución técnica de activos inmobiliarios</p>
          </div>
          <div className="credit-tag">
            <span>Skill: image-to-code-skill</span>
            <small>Pixel-Fidelity &amp; Layout Engineering</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
