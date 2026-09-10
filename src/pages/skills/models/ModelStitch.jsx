import React, { useState } from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { FadeGallery } from '../../../components/FadeGallery';
import { SkillMapSection } from '../../../components/SkillMapSection';
import { Search, Sliders, ArrowUpRight, Compass, Shield, MapPin } from 'lucide-react';
import './ModelStitch.css';

export function ModelStitch() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = mockProperties.filter(p => {
    const matchesCat = activeCategory === 'Todos' || p.type === activeCategory;
    const matchesQuery = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="stitch-page">
      <SkillFloatingBar 
        skillName="stitch-skill" 
        skillTitle="Stitch Design Taste" 
        archetype="Semantic Zinc Palette • Asymmetric Split Hero" 
      />

      {/* TOP HEADER */}
      <header className="stitch-header">
        <div className="stitch-container">
          <div className="stitch-nav-bar">
            <div className="stitch-logo">
              <span className="stitch-square"></span>
              <strong>STITCH.REALTY</strong>
              <span className="version-pill">CORRIENTES</span>
            </div>

            <div className="stitch-nav-meta">
              <span className="data-point">BASE: CORRIENTES REGION</span>
              <span className="data-divider">•</span>
              <span className="data-point">{mockProperties.length} PARCELAS INDEXADAS</span>
            </div>
          </div>
        </div>
      </header>

      {/* ASYMMETRIC SPLIT HERO */}
      <section className="stitch-hero">
        <div className="stitch-container stitch-hero-layout">
          <div className="stitch-hero-left">
            <div className="stitch-tag-eyebrow">
              <span className="accent-bullet"></span>
              <span>SISTEMA DE GESTIÓN PATRIMONIAL</span>
            </div>

            <h1 className="stitch-h1">
              Arquitectura rigurosa <span className="inline-hero-img" style={{ backgroundImage: `url(${mockProperties[0].images[0]})` }}></span> para inversiones patrimoniales seguras.
            </h1>

            <p className="stitch-lead">
              Base neutral de alta densidad. Diseñado bajo principios de claridad documental, contratos transparentes y localización geoespacial de activos.
            </p>

            <div className="stitch-search-module">
              <div className="input-group">
                <Search size={16} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Buscar por barrio, calle o tipología..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="stitch-input"
                />
              </div>
              <div className="category-chips">
                {['Todos', 'Casa', 'Departamento', 'Terreno'].map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`stitch-chip ${activeCategory === cat ? 'active' : ''}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="stitch-hero-right">
            <div className="hero-feature-board">
              <div className="board-header">
                <span>DESTACADO DE TEMPORADA</span>
                <span className="board-badge">VERIFICADO</span>
              </div>
              <div className="board-visual">
                <FadeGallery images={mockProperties[1].images} alt="Propiedad destacada" height="230px" />
                <div className="board-visual-tag">{mockProperties[1].priceLabel}</div>
              </div>
              <div className="board-meta">
                <h4>{mockProperties[1].title}</h4>
                <p><MapPin size={13} /> {mockProperties[1].location}</p>
                <div className="board-metrics">
                  <div><span>ÁREA</span><strong>{mockProperties[1].area} m²</strong></div>
                  <div><span>DORM.</span><strong>{mockProperties[1].bedrooms}</strong></div>
                  <div><span>BAÑOS</span><strong>{mockProperties[1].bathrooms}</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEMANTIC PROPERTY CARDS */}
      <main className="stitch-main">
        <div className="stitch-container">
          <div className="catalog-header-bar">
            <div>
              <h2 className="catalog-heading">Índice Inmobiliario Activo</h2>
              <p className="catalog-caption">Mostrando {filtered.length} unidades disponibles con trazabilidad documental</p>
            </div>
          </div>

          <div className="stitch-cards-grid">
            {filtered.map((prop) => (
              <article key={prop.id} className="stitch-card">
                <div className="stitch-card-image-box">
                  <FadeGallery images={prop.images} alt={prop.title} height="210px" />
                  <span className="stitch-card-type-pill">{prop.type}</span>
                  <span className="stitch-card-op-pill">{prop.operation}</span>
                </div>

                <div className="stitch-card-content">
                  <div className="stitch-card-top">
                    <span className="stitch-card-city"><MapPin size={12} /> {prop.city}</span>
                    <span className="stitch-card-price">{prop.priceLabel}</span>
                  </div>

                  <h3 className="stitch-card-title">{prop.title}</h3>
                  <p className="stitch-card-desc">{prop.description}</p>

                  <div className="stitch-card-specs-row">
                    <div className="spec-unit">
                      <span>Superficie</span>
                      <strong>{prop.area} m²</strong>
                    </div>
                    <div className="spec-unit">
                      <span>Habitaciones</span>
                      <strong>{prop.bedrooms || '-'}</strong>
                    </div>
                    <div className="spec-unit">
                      <span>Cochera</span>
                      <strong>{prop.garage ? 'Sí' : 'No'}</strong>
                    </div>
                  </div>

                  <div className="stitch-card-actions">
                    <a 
                      href={`https://wa.me/${prop.whatsapp}?text=Hola,%20consulta%20técnica%20sobre:%20${encodeURIComponent(prop.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="stitch-card-cta"
                    >
                      <span>Solicitar Legajo Notarial</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <SkillMapSection
        properties={filtered}
        variant="light"
        accent="#18181b"
        tone="light"
        label="Índice geoespacial"
        title="Parcelas indexadas en el territorio"
        note="Trazabilidad de cada unidad sobre el mapa. Los marcadores siguen el filtro activo del catálogo."
      />

      {/* FOOTER */}
      <footer className="stitch-footer">
        <div className="stitch-container stitch-footer-content">
          <div className="stitch-foot-left">
            <span className="square-tiny"></span>
            <strong>STITCH.REALTY • CORRIENTES, ARGENTINA</strong>
          </div>
          <div className="stitch-foot-right">
            <span>Luciano Jensen</span>
            <small>WhatsApp 3794675203 &middot; Gestión patrimonial</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
