import React, { useState } from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { FadeGallery } from '../../../components/FadeGallery';
import { SkillMapSection } from '../../../components/SkillMapSection';
import { Terminal, Crosshair, Cpu, Filter, MapPin, Activity, ShieldAlert, ArrowUpRight } from 'lucide-react';
import './ModelBrutalist.css';

export function ModelBrutalist() {
  const [filterType, setFilterType] = useState('ALL');
  const [activeProperty, setActiveProperty] = useState(mockProperties[0]);

  const filtered = filterType === 'ALL' 
    ? mockProperties.slice(0, 8) 
    : mockProperties.filter(p => p.type.toUpperCase() === filterType).slice(0, 8);

  return (
    <div className="brutalist-page">
      <SkillFloatingBar 
        skillName="brutalist-skill" 
        skillTitle="Industrial Brutalism & Tactical Telemetry" 
        archetype="Swiss Blueprint / CRT Dark Matrix" 
      />

      {/* HEADER TELEMETRY STRIP */}
      <header className="brutalist-header">
        <div className="telemetry-bar">
          <span>SYS.OP // REAL_ESTATE_CORRIENTES_RADAR</span>
          <span className="live-pulse"><Activity size={12} /> TELEMETRY ACTIVE [LAT: -27.469 | LON: -58.830]</span>
          <span>UNIT // COR-ARG-V8</span>
        </div>

        <div className="brutalist-hero-grid">
          <div className="hero-data-cell hero-title-cell">
            <div className="cell-tag">[ ARCHITECTURAL TELEMETRY ]</div>
            <h1 className="brutalist-h1">PROP // DATA MATRIX</h1>
            <p className="brutalist-sub">
              TERMINAL DE ACCESO A SUELO URBANO, ASSETS INMOBILIARIOS Y COORDENADAS ESTRUCTURALES EN CORRIENTES CAPITAL Y ZONAS COSTERAS.
            </p>
            <div className="ascii-decor">
              +---+--------------------------+---+<br/>
              |   | ACQUISITION ENGINE v2.4  |   |<br/>
              +---+--------------------------+---+
            </div>
          </div>

          <div className="hero-data-cell hero-metrics-cell">
            <div className="cell-tag">[ ACTIVE METRICS ]</div>
            <dl className="metric-row">
              <dt>TOTAL ASSETS:</dt>
              <dd>{mockProperties.length} UNITS</dd>
            </dl>
            <dl className="metric-row">
              <dt>SALE REGISTER:</dt>
              <dd>{mockProperties.filter(p => p.operation === 'Venta').length} CODED</dd>
            </dl>
            <dl className="metric-row">
              <dt>LEASE PROTOCOL:</dt>
              <dd>{mockProperties.filter(p => p.operation === 'Alquiler').length} CONTRACTS</dd>
            </dl>
            <dl className="metric-row highlight-red">
              <dt>STATUS:</dt>
              <dd>ONLINE /// TICK 44ms</dd>
            </dl>
          </div>
        </div>
      </header>

      {/* FILTER CONTROL BAR */}
      <nav className="brutalist-filter-nav">
        <span className="filter-label"><Filter size={14} /> FILTER_SELECTOR:</span>
        {['ALL', 'CASA', 'DEPARTAMENTO', 'TERRENO'].map(type => (
          <button 
            key={type} 
            onClick={() => setFilterType(type)}
            className={`brutalist-filter-btn ${filterType === type ? 'active' : ''}`}
          >
            [{type}]
          </button>
        ))}
      </nav>

      {/* MAIN DATA GRID (ASSETS) */}
      <main className="brutalist-main">
        <div className="brutalist-catalog-grid">
          {filtered.map((prop, idx) => (
            <article 
              key={prop.id} 
              className={`brutalist-card ${activeProperty?.id === prop.id ? 'active-target' : ''}`}
              onClick={() => setActiveProperty(prop)}
            >
              <div className="card-top-marker">
                <span>INDEX // {String(idx + 1).padStart(2, '0')}</span>
                <span className="badge-op">[{prop.operation.toUpperCase()}]</span>
                <span className="cross-symb"><Crosshair size={13} /></span>
              </div>

              <div className="card-media-wrapper">
                <FadeGallery
                  images={prop.images}
                  alt={prop.title}
                  height="200px"
                  className="brutalist-gallery"
                  showDots={false}
                />
                <div className="scanline-overlay"></div>
                <div className="coord-stamp">
                  {prop.city.toUpperCase()} // LAT {prop.coordinates?.[0]?.toFixed(3)}
                </div>
              </div>

              <div className="card-content-block">
                <h3 className="prop-spec-title">{prop.title.toUpperCase()}</h3>
                <p className="prop-loc-meta"><MapPin size={12} /> {prop.location.toUpperCase()}</p>
                
                <div className="spec-table">
                  <div className="spec-row">
                    <span>TYPE</span>
                    <span>{prop.type.toUpperCase()}</span>
                  </div>
                  <div className="spec-row">
                    <span>AREA</span>
                    <span>{prop.area} M²</span>
                  </div>
                  <div className="spec-row">
                    <span>ROOMS / BATH</span>
                    <span>{prop.bedrooms || 0}D / {prop.bathrooms || 0}B</span>
                  </div>
                </div>

                <div className="card-footer-action">
                  <div className="price-readout">{prop.priceLabel}</div>
                  <a 
                    href={`https://wa.me/${prop.whatsapp}?text=CONSULTA_ASSET_ID_${prop.id}_${encodeURIComponent(prop.title)}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="brutalist-btn-red"
                  >
                    DISPATCH WA <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SELECTED TARGET RADAR TERMINAL */}
        {activeProperty && (
          <aside className="telemetry-terminal-panel">
            <div className="terminal-header">
              <span className="term-indicator"><Terminal size={14} /> ACTIVE TELEMETRY PROBE /// TARGET #{activeProperty.id}</span>
              <span>PARITY: OK</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-left">
                <h4>DATA DUMP: {activeProperty.title.toUpperCase()}</h4>
                <p className="terminal-desc">{activeProperty.description}</p>
                <div className="terminal-features">
                  {activeProperty.amenities?.map((f, i) => (
                    <span key={i} className="terminal-tag">/// {f.toUpperCase()}</span>
                  ))}
                </div>
              </div>
              <div className="terminal-right">
                <div className="warning-box">
                  <ShieldAlert size={16} /> REGISTRO CATASTRAL VALIDADO EN REGISTRO DE LA PROPIEDAD INMUEBLE DE CORRIENTES.
                </div>
                <a 
                  href={`https://wa.me/${activeProperty.whatsapp}?text=CONSULTA_URGENTE_TELEMETRIA_${activeProperty.id}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="terminal-dispatch-btn"
                >
                  &gt;&gt;&gt; INICIAR PROTOCOLO DE ADQUISICION &lt;&lt;&lt;
                </a>
              </div>
            </div>
          </aside>
        )}
      </main>

      <SkillMapSection
        properties={filtered}
        variant="blueprint"
        accent="#E61919"
        tone="dark"
        label="[ GEO-TELEMETRY ]"
        title="COORDENADAS ESTRUCTURALES // MAPA RADAR"
        note="POSICIONAMIENTO DE ASSETS EN GRILLA GEOESPACIAL. CLICK EN MARCADOR PARA DATA DUMP."
      />

      <footer className="brutalist-footer">
        <div className="foot-left">
          [ SKILL: brutalist-skill ] • ENGINE: SWISS INDUSTRIAL TELEMETRY
        </div>
        <div className="foot-right">
          CORRIENTES REAL ESTATE RAW DATABASE © 2026 // ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
}
