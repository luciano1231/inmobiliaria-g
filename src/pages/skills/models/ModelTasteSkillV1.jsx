import React, { useState } from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { ArrowUpRight, Compass, MapPin, Zap, Flame } from 'lucide-react';
import './ModelTasteSkillV1.css';

export function ModelTasteSkillV1() {
  const [filterOp, setFilterOp] = useState('ALL');

  const filtered = filterOp === 'ALL'
    ? mockProperties.slice(0, 6)
    : mockProperties.filter(p => p.operation === filterOp).slice(0, 6);

  return (
    <div className="taste-v1-page">
      <SkillFloatingBar 
        skillName="taste-skill-v1" 
        skillTitle="Taste-Skill v1 Original" 
        archetype="Vintage Anti-Slop Classic • High-Contrast Brut/Editorial" 
      />

      {/* RAW EDITORIAL HEADER */}
      <header className="v1-header">
        <div className="v1-container">
          <div className="v1-meta-strip">
            <span>[ SYSTEM: TASTE-SKILL-V1 ]</span>
            <span>EDICIÓN ORIGINAL LITORAL</span>
          </div>

          <h1 className="v1-massive-title">
            BIENES RAÍCES CON IDENTIDAD PROPIA.
          </h1>

          <div className="v1-split-sub">
            <p>
              La primera versión del manifiesto anti-slop: tipografías contundentes, composición asimétrica y cero clichés de agencias genéricas.
            </p>
            <div className="v1-badge-box">
              <strong>{mockProperties.length} INMUEBLES</strong>
              <span>DISPONIBILIDAD INMEDIATA</span>
            </div>
          </div>

          <div className="v1-filter-bar">
            {['ALL', 'Venta', 'Alquiler'].map(op => (
              <button 
                key={op}
                onClick={() => setFilterOp(op)}
                className={`v1-filter-btn ${filterOp === op ? 'active' : ''}`}
              >
                {op === 'ALL' ? 'VER TODO' : op.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* HIGH CONTRAST CARDS GRID */}
      <main className="v1-main">
        <div className="v1-container">
          <div className="v1-grid">
            {filtered.map((prop, idx) => (
              <article key={prop.id} className="v1-card">
                <div className="v1-media">
                  <img src={prop.images[0]} alt={prop.title} />
                  <span className="v1-num-tag">#{String(idx + 1).padStart(2, '0')}</span>
                  <span className="v1-op-badge">{prop.operation}</span>
                </div>

                <div className="v1-body">
                  <span className="v1-loc"><MapPin size={12} /> {prop.city}</span>
                  <h3 className="v1-title">{prop.title}</h3>
                  <div className="v1-price">{prop.priceLabel}</div>
                  <p className="v1-desc">{prop.description}</p>

                  <div className="v1-specs-bar">
                    <span>{prop.area} M²</span>
                    <span>{prop.type.toUpperCase()}</span>
                    <span>{prop.bedrooms || 0} DORM.</span>
                  </div>

                  <a 
                    href={`https://wa.me/${prop.whatsapp}?text=Hola,%20consulta%20taste-v1:%20${encodeURIComponent(prop.title)}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="v1-action-btn"
                  >
                    <span>CONSULTAR DISPONIBILIDAD</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className="v1-footer">
        <div className="v1-container v1-footer-flex">
          <div>
            <strong>INMOBILIARIA G • CORRIENTES ARGENTINA</strong>
            <p>Atención directa por Luciano Jensen</p>
          </div>
          <div className="v1-sign">
            <span>Skill: taste-skill-v1</span>
            <small>Original Taste Directive Classic</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
