import React, { useState } from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { ArrowUpRight, Check, MapPin, Sliders, ShieldCheck, Sparkles } from 'lucide-react';
import './ModelRedesign.css';

export function ModelRedesign() {
  const [filterType, setFilterType] = useState('ALL');
  
  const properties = filterType === 'ALL'
    ? mockProperties.slice(0, 4)
    : mockProperties.filter(p => p.type === filterType).slice(0, 4);

  return (
    <div className="redesign-page">
      <SkillFloatingBar 
        skillName="redesign-skill" 
        skillTitle="Modern Architectural Redesign" 
        archetype="Anti-Pattern Audit • 2-Column Zig-Zag Layout" 
      />

      {/* HERO WITH ARCHITECTURAL DEPTH */}
      <header className="redesign-hero">
        <div className="redesign-container">
          <div className="audit-provenance-pill">
            <Sparkles size={13} />
            <span>AUDITORÍA DE REDISEÑO APLICADA</span>
          </div>

          <h1 className="redesign-h1">
            Espacios diseñados con proporción, luz y arraigo litoral.
          </h1>

          <p className="redesign-lead">
            Eliminamos el ruido visual de los portales genéricos. Una presentación arquitectónica depurada de inmuebles en Corrientes con datos fidedignos y contacto directo sin fricción.
          </p>

          <div className="redesign-stats-strip">
            <div className="stat-unit">
              <strong>{mockProperties.length}</strong>
              <span>Propiedades Auditadas</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-unit">
              <strong>0%</strong>
              <span>Filtros Engañosos</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-unit">
              <strong>100%</strong>
              <span>Precios Transparentes</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2-COLUMN ZIG-ZAG FEATURED COLLECTION (Replaces generic 3-card row) */}
      <main className="redesign-main">
        <div className="redesign-container">
          <div className="redesign-section-top">
            <div>
              <span className="eyebrow-accent">COLECCIÓN CURADA</span>
              <h2 className="section-title-clean">Residencias y Oportunidades Seleccionadas</h2>
            </div>

            <div className="redesign-tabs">
              {['ALL', 'Casa', 'Departamento'].map(t => (
                <button
                  key={t}
                  onClick={() => setFilterType(t)}
                  className={`redesign-tab-btn ${filterType === t ? 'active' : ''}`}
                >
                  {t === 'ALL' ? 'Ver Todo' : t}
                </button>
              ))}
            </div>
          </div>

          <div className="zigzag-collection">
            {properties.map((prop, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <article key={prop.id} className={`zigzag-card ${isEven ? 'zigzag-normal' : 'zigzag-reversed'}`}>
                  <div className="zigzag-media">
                    <img src={prop.images[0]} alt={prop.title} loading="lazy" />
                    <span className="zigzag-tag">{prop.operation}</span>
                    <div className="zigzag-price-badge">{prop.priceLabel}</div>
                  </div>

                  <div className="zigzag-content">
                    <div className="zigzag-meta-loc">
                      <MapPin size={13} />
                      <span>{prop.location}</span>
                    </div>

                    <h3 className="zigzag-title">{prop.title}</h3>
                    <p className="zigzag-desc">{prop.description}</p>

                    <div className="zigzag-specs-cluster">
                      <div className="spec-bubble">
                        <span>SUPERFICIE</span>
                        <strong>{prop.area} m²</strong>
                      </div>
                      <div className="spec-bubble">
                        <span>DORMITORIOS</span>
                        <strong>{prop.bedrooms || 'Monoambiente'}</strong>
                      </div>
                      <div className="spec-bubble">
                        <span>BAÑOS</span>
                        <strong>{prop.bathrooms || 1}</strong>
                      </div>
                    </div>

                    <div className="zigzag-actions">
                      <a 
                        href={`https://wa.me/${prop.whatsapp}?text=Hola,%20consulta%20por:%20${encodeURIComponent(prop.title)}`}
                        target="_blank" 
                        rel="noreferrer"
                        className="redesign-primary-btn"
                      >
                        <span>Coordinar Visita</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>

      {/* REDESIGN PRINCIPLES ACCORDION / SUMMARY */}
      <section className="redesign-audit-box-section">
        <div className="redesign-container">
          <div className="audit-summary-card">
            <h3>Por qué este rediseño supera al estándar</h3>
            <div className="summary-triad">
              <div className="triad-item">
                <div className="triad-icon"><Check size={16} /></div>
                <h4>Fin de la simetría aburrida</h4>
                <p>Reemplazo de la cuadrícula monótona por composición zig-zag con pesos visuales equilibrados.</p>
              </div>
              <div className="triad-item">
                <div className="triad-icon"><Check size={16} /></div>
                <h4>Tipografía con carácter</h4>
                <p>Uso de tracking negativo en titulares y figuras numéricas tabulares para claridad de tasación.</p>
              </div>
              <div className="triad-item">
                <div className="triad-icon"><Check size={16} /></div>
                <h4>Trato directo verificado</h4>
                <p>Contacto sin formularios eternos: comunicación inmediata por WhatsApp con el titular.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="redesign-footer">
        <div className="redesign-container footer-split">
          <div>
            <strong>INMOBILIARIA G • CORRIENTES</strong>
            <p>Rediseño de experiencia digital para el mercado inmobiliario</p>
          </div>
          <div className="redesign-skill-credit">
            <span>Skill: redesign-skill</span>
            <small>Auditoría Anti-Patrones &amp; Elevación Estética</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
