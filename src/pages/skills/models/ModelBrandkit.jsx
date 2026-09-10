import React, { useState } from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { Layers, Palette, Type, Award, Grid, ArrowUpRight, Check, MapPin } from 'lucide-react';
import './ModelBrandkit.css';

export function ModelBrandkit() {
  const [activeBoard, setActiveBoard] = useState('ALL');
  
  const properties = activeBoard === 'ALL'
    ? mockProperties.slice(0, 4)
    : mockProperties.filter(p => p.type === activeBoard).slice(0, 4);

  return (
    <div className="brandkit-page">
      <SkillFloatingBar 
        skillName="brandkit" 
        skillTitle="Brand Guidelines & Identity Hub" 
        archetype="Charcoal Presentation Deck • Identity System" 
      />

      {/* BRAND GUIDELINE HEADER BOARD */}
      <div className="brandkit-container">
        <header className="brandkit-board board-header-panel">
          <div className="board-topline">
            <span className="deck-id">DECK REF // G-ESTATE-2026</span>
            <span className="deck-title">VISUAL IDENTITY &amp; ASSET SPECIFICATION</span>
            <span className="deck-page">PAGE 01 / 04</span>
          </div>

          <div className="board-hero-content">
            <div className="brand-symbol-box">
              <div className="brand-monogram">G</div>
              <span className="brand-sub">LUCIANO JENSEN</span>
            </div>

            <div className="brand-thesis">
              <h1 className="brand-h1">Inmobiliaria G • Guía de Identidad &amp; Propiedades</h1>
              <p className="brand-desc">
                Sistema de marca arquitectónica enfocado en la solidez del ladrillo, la sobriedad documental y el prestigio de los desarrollos urbanos de Corrientes.
              </p>
            </div>
          </div>

          {/* PALETTE CHIPS EMBEDDED IN BRAND BOARD */}
          <div className="color-taxonomy-strip">
            <div className="color-swatch-item">
              <span className="swatch-color" style={{ background: '#121316' }}></span>
              <strong>Charcoal Night</strong>
              <small>#121316</small>
            </div>
            <div className="color-swatch-item">
              <span className="swatch-color" style={{ background: '#e5ded6' }}></span>
              <strong>Stone Cream</strong>
              <small>#E5DED6</small>
            </div>
            <div className="color-swatch-item">
              <span className="swatch-color" style={{ background: '#c29b63' }}></span>
              <strong>Riviera Ochre</strong>
              <small>#C29B63</small>
            </div>
            <div className="color-swatch-item">
              <span className="swatch-color" style={{ background: '#242c35' }}></span>
              <strong>Paraná Slate</strong>
              <small>#242C35</small>
            </div>
          </div>
        </header>

        {/* BOARD 02: ASSETS & PROPERTY APPLICATIONS */}
        <section className="brandkit-board board-assets-panel">
          <div className="board-topline">
            <span className="deck-id">SECTION 02 // PROPERTY ASSETS</span>
            <span className="deck-title">PORTAFOLIO BAJO MANUAL DE MARCA</span>
            <span className="deck-page">PAGE 02 / 04</span>
          </div>

          <div className="assets-filter-nav">
            {['ALL', 'Casa', 'Departamento', 'Terreno'].map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveBoard(cat)}
                className={`brand-tab ${activeBoard === cat ? 'active' : ''}`}
              >
                {cat === 'ALL' ? 'Todos los Activos' : cat}
              </button>
            ))}
          </div>

          <div className="brandkit-cards-grid">
            {properties.map(prop => (
              <article key={prop.id} className="brand-asset-card">
                <div className="brand-card-topbar">
                  <span className="asset-code">ASSET-{String(prop.id).padStart(3, '0')}</span>
                  <span className="asset-tag">{prop.operation}</span>
                </div>

                <div className="brand-card-media">
                  <img src={prop.images[0]} alt={prop.title} />
                  <div className="card-blueprint-mark">+</div>
                </div>

                <div className="brand-card-body">
                  <div className="asset-loc"><MapPin size={12} /> {prop.location}</div>
                  <h3 className="asset-title">{prop.title}</h3>
                  <p className="asset-description">{prop.description}</p>
                  
                  <div className="asset-specs-grid">
                    <div><label>SUPERFICIE</label><strong>{prop.area} M²</strong></div>
                    <div><label>HABITACIONES</label><strong>{prop.bedrooms || '-'}</strong></div>
                    <div><label>VALOR</label><strong className="val-text">{prop.priceLabel}</strong></div>
                  </div>

                  <a 
                    href={`https://wa.me/${prop.whatsapp}?text=Hola,%20consulta%20por%20asset%20${prop.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="brand-card-cta"
                  >
                    <span>Abrir Expediente Notarial</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BOARD 03: BRAND PILLARS */}
        <section className="brandkit-board board-pillars-panel">
          <div className="board-topline">
            <span className="deck-id">SECTION 03 // BRAND PILLARS</span>
            <span className="deck-title">PRINCIPIOS ESTRATÉGICOS</span>
            <span className="deck-page">PAGE 03 / 04</span>
          </div>

          <div className="pillars-layout">
            <div className="pillar-column">
              <span className="pillar-num">01</span>
              <h4>Rigor Notarial</h4>
              <p>Ningún inmueble ingresa al catálogo sin análisis de dominio previo y verificación en el Registro de la Propiedad de Corrientes.</p>
            </div>
            <div className="pillar-column">
              <span className="pillar-num">02</span>
              <h4>Tasación In Situ</h4>
              <p>Tasamos con valores reales de mercado, sustentados en datos comparables de transacciones recientes, no en expectativas infladas.</p>
            </div>
            <div className="pillar-column">
              <span className="pillar-num">03</span>
              <h4>Acompañamiento 360°</h4>
              <p>Desde la primera visita hasta la firma final de escritura, te acompaña Luciano Jensen de forma directa y personalizada.</p>
            </div>
          </div>
        </section>

        {/* FOOTER BOARD */}
        <footer className="brandkit-board board-footer-panel">
          <div className="footer-deck-flex">
            <div>
              <strong>INMOBILIARIA G • BRAND ARCHITECTURE DECK</strong>
              <p>Corrientes Capital • Contacto directo: 3794675203</p>
            </div>
            <div className="brandkit-skill-ref">
              <span>Skill: brandkit</span>
              <label>Guidelines &amp; Visual Identity System</label>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
