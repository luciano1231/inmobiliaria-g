import React, { useState } from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { FadeGallery } from '../../../components/FadeGallery';
import { SkillMapSection } from '../../../components/SkillMapSection';
import { ArrowUpRight, Compass, MapPin, Zap, Flame } from 'lucide-react';
import './ModelTasteSkillV1.css';

export function ModelTasteSkillV1() {
  const [filterOp, setFilterOp] = useState('ALL');

  const filtered = filterOp === 'ALL'
    ? mockProperties
    : mockProperties.filter(p => p.operation === filterOp);

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
            <span>[ INMOBILIARIA G ]</span>
            <span>CORRIENTES &amp; LITORAL</span>
          </div>

          <h1 className="v1-massive-title">
            BIENES RAÍCES CON IDENTIDAD PROPIA.
          </h1>

          <div className="v1-split-sub">
            <p>
              Casas, departamentos y lotes en Corrientes capital y localidades vecinas. Fichas con datos reales, fotos sin retoque engañoso y contacto directo.
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
                  <FadeGallery images={prop.images} alt={prop.title} height="220px" showDots={false} />
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
                    href={`https://wa.me/${prop.whatsapp}?text=${encodeURIComponent(`Hola, consulta por la propiedad: ${prop.title}`)}`}
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

      <SkillMapSection
        properties={filtered}
        variant="mono"
        accent="#111111"
        tone="light"
        label="[ MAPA ]"
        title="INMUEBLES SOBRE EL TERRITORIO"
        note="Disponibilidad geolocalizada. El mapa sigue el filtro activo (venta / alquiler)."
      />

      <footer className="v1-footer">
        <div className="v1-container v1-footer-flex">
          <div>
            <strong>INMOBILIARIA G • CORRIENTES ARGENTINA</strong>
            <p>Atención directa por Luciano Jensen</p>
          </div>
          <div className="v1-sign">
            <span>Contacto</span>
            <small>WhatsApp 3794675203</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
