import React, { useState } from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { FadeGallery } from '../../../components/FadeGallery';
import { SkillMapSection } from '../../../components/SkillMapSection';
import { VerFichaLink } from '../../../components/VerFichaLink';
import { ArrowRight, Compass, Eye, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import './ModelTasteSkill.css';

export function ModelTasteSkill() {
  const [selectedCity, setSelectedCity] = useState('Todas');
  
  const cities = ['Todas', 'Corrientes', 'Paso de la Patria', 'Santa Ana', 'Riachuelo', 'Resistencia'];
  const properties = (selectedCity === 'Todas'
    ? mockProperties
    : mockProperties.filter(p => p.city.toLowerCase().includes(selectedCity.toLowerCase()))
  ).slice(0, 16);

  return (
    <div className="taste-skill-page">
      <SkillFloatingBar 
        skillName="taste-skill" 
        skillTitle="Anti-Slop Modern Creative" 
        archetype="Neo-Editorial Art Direction • Anti-Template Layout" 
      />

      {/* TASTESKILL DIAL INDICATOR & HERO */}
      <header className="taste-hero">
        <div className="taste-container">
          <div className="taste-dials-readout">
            <span className="dial-badge">{mockProperties.length} propiedades</span>
            <span className="dial-badge">Corrientes + Chaco</span>
            <span className="dial-badge">Venta y alquiler</span>
            <span className="dial-meta">Trato directo con el propietario de la gestión</span>
          </div>

          <div className="taste-hero-split">
            <div className="taste-hero-text">
              <span className="taste-kicker">PROPUESTA INMOBILIARIA NO CONVENCIONAL</span>
              <h1 className="taste-h1">
                La arquitectura del Litoral, sin intermediación genérica.
              </h1>
              <p className="taste-lead">
                Rechazamos las plantillas idénticas de portales saturados. Cada casa y lote cuenta con un informe de habitabilidad genuino, fotografía con luz natural y tasación transparente.
              </p>
              
              <div className="taste-cta-group">
                <a href="#galeria" className="taste-btn-black">
                  Explorar Propiedades <ArrowRight size={15} />
                </a>
                <span className="curated-count">
                  <strong>{mockProperties.length}</strong> inmuebles analizados uno a uno
                </span>
              </div>
            </div>

            <div className="taste-hero-image-block">
              <div className="offset-card">
                <FadeGallery images={mockProperties[2].images} alt="Propiedad destacada" height="380px" />
                <div className="offset-card-caption">
                  <span>RESIDENCIA DESTACADA</span>
                  <strong>{mockProperties[2].title}</strong>
                  <p>{mockProperties[2].priceLabel} • {mockProperties[2].location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FILTER BAR WITH DISTINCTIVE TYPOGRAPHY */}
      <section className="taste-filter-strip">
        <div className="taste-container">
          <div className="filter-wrapper">
            <span className="filter-title">UBICACIÓN GEOGRÁFICA:</span>
            <div className="filter-buttons">
              {cities.map(c => (
                <button
                  key={c}
                  onClick={() => setSelectedCity(c)}
                  className={`taste-pill ${selectedCity === c ? 'active' : ''}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG WITH ASYMMETRICAL EDITORIAL RHYTHM */}
      <main id="galeria" className="taste-main">
        <div className="taste-container">
          <div className="taste-cards-stream">
            {properties.map((prop, idx) => (
              <article key={prop.id} className={`taste-prop-row ${idx % 2 === 1 ? 'row-reversed' : ''}`}>
                <div className="taste-prop-media">
                  <FadeGallery images={prop.images} alt={prop.title} height="300px" />
                  <span className="prop-city-tag">{prop.city}</span>
                </div>

                <div className="taste-prop-info">
                  <div className="prop-badge-line">
                    <span className="op-tag">{prop.operation}</span>
                    <span className="type-tag">{prop.type}</span>
                  </div>

                  <h2 className="prop-heading">{prop.title}</h2>
                  <p className="prop-location-line"><MapPin size={13} /> {prop.location}</p>
                  <p className="prop-description">{prop.description}</p>

                  <div className="prop-specs-table">
                    <div>
                      <span>Metros Cuadrados</span>
                      <strong>{prop.area} m²</strong>
                    </div>
                    <div>
                      <span>Dormitorios</span>
                      <strong>{prop.bedrooms || 'Consultar'}</strong>
                    </div>
                    <div>
                      <span>Cochera</span>
                      <strong>{prop.garage ? 'Incluida' : 'No posee'}</strong>
                    </div>
                  </div>

                  <div className="prop-action-row">
                    <div className="price-display">{prop.priceLabel}</div>
                    <VerFichaLink id={prop.id} />
                    <a
                      href={`https://wa.me/${prop.whatsapp}?text=Hola,%20quisiera%20recibir%20el%20dossier%20completo%20de:%20${encodeURIComponent(prop.title)}`}
                      target="_blank" 
                      rel="noreferrer" 
                      className="taste-btn-outline"
                    >
                      Solicitar Dossier <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* AUDIT QUALITY CRITERIA */}
      <section className="taste-audit-section">
        <div className="taste-container">
          <div className="audit-card">
            <h3>Nuestros criterios de calidad</h3>
            <div className="criteria-grid">
              <div className="crit-item">
                <CheckCircle2 size={18} className="crit-icon" />
                <div>
                  <strong>Fotografía Real</strong>
                  <p>Sin distorsiones de ultra gran angular que engañen sobre los metros reales.</p>
                </div>
              </div>
              <div className="crit-item">
                <CheckCircle2 size={18} className="crit-icon" />
                <div>
                  <strong>Precio Verificado</strong>
                  <p>Valores de mercado cotejados por peritos tasadores matriculados.</p>
                </div>
              </div>
              <div className="crit-item">
                <CheckCircle2 size={18} className="crit-icon" />
                <div>
                  <strong>Sin Copias Genéricas</strong>
                  <p>Trato directo de persona a persona con Luciano Jensen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SkillMapSection
        properties={properties}
        variant="mono"
        accent="#b91c1c"
        tone="light"
        label="Territorio"
        title="La arquitectura del Litoral, ubicada"
        note="Mapa vinculado al filtro de ubicación. Cada punto abre el dossier de la propiedad."
      />

      {/* FOOTER */}
      <footer className="taste-footer">
        <div className="taste-container taste-footer-row">
          <div>
            <strong>INMOBILIARIA G • CORRIENTES</strong>
            <p>Intermediación inmobiliaria y gestión arquitectónica</p>
          </div>
          <div className="taste-foot-sign">
            <span>Luciano Jensen</span>
            <small>WhatsApp 3794675203 &middot; Corrientes</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
