import React, { useState } from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, Gem, Building } from 'lucide-react';
import './ModelSoftSkill.css';

export function ModelSoftSkill() {
  const [activeTab, setActiveTab] = useState('ALL');
  
  const properties = activeTab === 'ALL'
    ? mockProperties.slice(0, 6)
    : mockProperties.filter(p => p.type === activeTab).slice(0, 6);

  return (
    <div className="soft-skill-page">
      <SkillFloatingBar 
        skillName="soft-skill" 
        skillTitle="High-End Visual Design" 
        archetype="$150k Agency • Doppelrand Double-Bezel" 
      />

      {/* DETACHED FLOATING NAV ISLAND */}
      <div className="soft-nav-island-wrapper">
        <header className="soft-nav-island">
          <div className="soft-brand">
            <span className="soft-brand-mark"><Gem size={15} /></span>
            <span className="soft-brand-name">L’HABITAT PRIVÉ</span>
          </div>

          <div className="soft-nav-links">
            {['ALL', 'Casa', 'Departamento'].map((type) => (
              <button 
                key={type}
                className={`soft-nav-item ${activeTab === type ? 'active' : ''}`}
                onClick={() => setActiveTab(type)}
              >
                {type === 'ALL' ? 'Colección Completa' : type === 'Casa' ? 'Residencias' : 'Áticos & Deptos'}
              </button>
            ))}
          </div>

          <a 
            href={`https://wa.me/5493794675203?text=Hola,%20solicito%20acceso%20a%20la%20colección%20privada`} 
            target="_blank" 
            rel="noreferrer"
            className="soft-island-btn"
          >
            <span>Concierge</span>
            <div className="btn-icon-wrapper">
              <ArrowUpRight size={13} />
            </div>
          </a>
        </header>
      </div>

      {/* HERO SECTION */}
      <section className="soft-hero-section">
        <div className="soft-hero-glow"></div>
        <div className="soft-container">
          <div className="eyebrow-badge">
            <Sparkles size={11} />
            <span>ESTATE CURATION • PROVINCIA DE CORRIENTES</span>
          </div>

          <h1 className="soft-h1">
            Propiedades singulares para vidas extraordinarias.
          </h1>

          <p className="soft-subtitle">
            Arquitectura seleccionada con criterios de discreción, solidez constructiva y ubicaciones de alto valor patrimonial.
          </p>

          <div className="soft-hero-actions">
            <a 
              href="#coleccion" 
              className="soft-primary-pill"
            >
              <span>Explorar Portafolio</span>
              <div className="btn-icon-circle">
                <ArrowUpRight size={15} />
              </div>
            </a>
            <div className="soft-social-proof">
              <div className="avatar-stack">
                <span className="avatar-dot dot-1"></span>
                <span className="avatar-dot dot-2"></span>
                <span className="avatar-dot dot-3"></span>
              </div>
              <span>+45 Familias e Inversionistas asesorados este año</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY GRID USING DOPPELRAND ARCHITECTURE */}
      <section id="coleccion" className="soft-collection-section">
        <div className="soft-container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow">PORTAFOLIO EXCLUSIVO</span>
              <h2 className="section-title">Obras arquitectónicas destacadas</h2>
            </div>
            <p className="section-narrative">
              Cada ficha cuenta con auditoría catastral, plano registrado y material fotográfico fidedigno.
            </p>
          </div>

          <div className="doppelrand-grid">
            {properties.map((prop) => (
              /* THE DOUBLE-BEZEL (DOPPELRAND) CONTAINER */
              <article key={prop.id} className="doppelrand-shell">
                <div className="doppelrand-core">
                  <div className="doppelrand-media">
                    <img src={prop.images[0]} alt={prop.title} loading="lazy" />
                    <div className="media-overlay-gradient"></div>
                    <div className="doppelrand-floating-tag">
                      {prop.operation} • {prop.type}
                    </div>
                  </div>

                  <div className="doppelrand-body">
                    <div className="doppelrand-meta">
                      <span className="loc-text">{prop.location}</span>
                      <span className="price-tag">{prop.priceLabel}</span>
                    </div>

                    <h3 className="doppelrand-title">{prop.title}</h3>
                    <p className="doppelrand-desc">{prop.description}</p>

                    <div className="doppelrand-specs">
                      <div className="spec-pill">
                        <strong>{prop.area}</strong> m² cubiertos
                      </div>
                      <div className="spec-pill">
                        <strong>{prop.bedrooms || 0}</strong> Suites
                      </div>
                      <div className="spec-pill">
                        <strong>{prop.bathrooms || 0}</strong> Baños
                      </div>
                    </div>

                    <div className="doppelrand-action-bar">
                      <a 
                        href={`https://wa.me/${prop.whatsapp}?text=Deseo%20coordinar%20una%20visita%20privada%20para:%20${encodeURIComponent(prop.title)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="nested-card-cta"
                      >
                        <span>Coordinar Visita Privada</span>
                        <div className="nested-btn-icon">
                          <ArrowUpRight size={14} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST REPUTATION SECTION */}
      <section className="soft-trust-section">
        <div className="soft-container">
          <div className="doppelrand-shell banner-shell">
            <div className="doppelrand-core banner-core">
              <div className="banner-content">
                <ShieldCheck size={36} className="trust-icon" />
                <h3>Garantía de Solvencia &amp; Notariado de Confianza</h3>
                <p>
                  Asistencia integral en escrituración, tasación bancaria y blindaje contractual para compradores locales e internacionales.
                </p>
                <div className="banner-stats">
                  <div><strong>0</strong><label>Litigios</label></div>
                  <div><strong>100%</strong><label>Escrituras Impecables</label></div>
                  <div><strong>24h</strong><label>Tiempo de Respuesta</label></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="soft-footer">
        <div className="soft-container footer-row">
          <div className="footer-brand">
            <h4>L’HABITAT PRIVÉ</h4>
            <p>Corrientes, Argentina • Asesoramiento inmobiliario de alto nivel</p>
          </div>
          <div className="footer-signature">
            <span>Skill: soft-skill</span>
            <label>Vanguard UI Architect • High-End Visual Design</label>
          </div>
        </div>
      </footer>
    </div>
  );
}
