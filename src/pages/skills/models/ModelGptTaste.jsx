import React, { useState } from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { FadeGallery } from '../../../components/FadeGallery';
import { SkillMapSection } from '../../../components/SkillMapSection';
import { ArrowUpRight, Compass, Sparkles, Star, MapPin, Eye } from 'lucide-react';
import './ModelGptTaste.css';

export function ModelGptTaste() {
  const [activeTab, setActiveTab] = useState('ALL');
  
  const properties = activeTab === 'ALL'
    ? mockProperties.slice(0, 5)
    : mockProperties.filter(p => p.type === activeTab).slice(0, 5);

  return (
    <div className="gpt-taste-page">
      <SkillFloatingBar 
        skillName="gpt-tasteskill" 
        skillTitle="Elite UX/UI & Motion" 
        archetype="AIDA Framework • Gapless Bento • 2-Line Hero" 
      />

      {/* FLOATING GLASS PILL NAV */}
      <div className="gpt-nav-container">
        <nav className="gpt-floating-nav">
          <div className="gpt-brand">
            <span className="brand-dot"></span>
            <strong>AURA HABITAT</strong>
          </div>
          <div className="gpt-nav-items">
            {['ALL', 'Casa', 'Departamento'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`gpt-tab-btn ${activeTab === tab ? 'active' : ''}`}
              >
                {tab === 'ALL' ? 'Unidades' : tab === 'Casa' ? 'Casas' : 'Deptos'}
              </button>
            ))}
          </div>
          <a href="#catalogo" className="gpt-nav-cta">
            <span>Explorar</span>
            <ArrowUpRight size={13} />
          </a>
        </nav>
      </div>

      {/* AIDA ATTENTION: CINEMATIC 2-LINE HERO */}
      <section className="gpt-hero-section">
        <div className="gpt-container">
          <h1 className="gpt-wide-h1">
            Redefiniendo el habitar <span className="inline-type-pill" style={{ backgroundImage: `url(${mockProperties[0].images[0]})` }}></span> en el Litoral argentino.
          </h1>

          <p className="gpt-hero-desc">
            Una colección rigurosa de residencias y departamentos en Corrientes Capital y enclaves ribereños. Curaduría arquitectónica sin concesiones.
          </p>

          <div className="gpt-hero-ctas">
            <a 
              href={`https://wa.me/5493794675203?text=Hola,%20quisiera%20conocer%20las%20propiedades%20disponibles`}
              target="_blank"
              rel="noreferrer" 
              className="gpt-btn-primary"
            >
              Consultar Asesoría Privada
            </a>
            <a href="#catalogo" className="gpt-btn-ghost">
              Ver Catálogo Bento
            </a>
          </div>
        </div>
      </section>

      {/* AIDA INTEREST: GAPLESS BENTO GRID (WITH DENSE FLOW) */}
      <section id="catalogo" className="gpt-bento-section">
        <div className="gpt-container">
          <div className="bento-heading-row">
            <h2>Selección Curada de Propiedades</h2>
            <p>Espacios con identidad, luz natural y ubicaciones estratégicas</p>
          </div>

          <div className="gapless-bento-grid">
            {properties.map((prop, idx) => {
              // Mathematical bento interlocking without empty dead spaces
              const isHeroCard = idx === 0;
              const isWideCard = idx === 3;
              
              return (
                <article 
                  key={prop.id} 
                  className={`gpt-bento-card ${isHeroCard ? 'card-hero-span' : ''} ${isWideCard ? 'card-wide-span' : ''}`}
                >
                  <div className="bento-media-frame">
                    <FadeGallery
                      images={prop.images}
                      alt={prop.title}
                      height={isHeroCard ? '360px' : '220px'}
                    />
                    <div className="bento-card-overlay"></div>
                    <span className="bento-pill-tag">{prop.operation} • {prop.type}</span>
                    <span className="bento-price-tag">{prop.priceLabel}</span>
                  </div>

                  <div className="bento-info-box">
                    <div className="bento-subline">
                      <MapPin size={12} />
                      <span>{prop.location}</span>
                    </div>

                    <h3 className="bento-card-title">{prop.title}</h3>
                    <p className="bento-card-desc">{prop.description}</p>

                    <div className="bento-metrics-strip">
                      <span>{prop.area} m²</span>
                      <span>•</span>
                      <span>{prop.bedrooms || 0} Dorm.</span>
                      <span>•</span>
                      <span>{prop.bathrooms || 0} Baños</span>
                    </div>

                    <a 
                      href={`https://wa.me/${prop.whatsapp}?text=Consulta%20por%20la%20propiedad:%20${encodeURIComponent(prop.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bento-link-arrow"
                    >
                      <span>Ver detalles y coordinar visita</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* AIDA DESIRE: CINEMATIC MEDIA STRIP */}
      <section className="gpt-desire-strip">
        <div className="gpt-container">
          <div className="desire-box">
            <div className="desire-text">
              <span className="desire-eyebrow">ENFOQUE PATRIMONIAL</span>
              <h3>Seguridad jurídica, tasación real y atención personalizada.</h3>
              <p>
                Acompañamos a compradores, vendedores e inversores en cada instancia del negocio inmobiliario en Corrientes.
              </p>
            </div>
            <div className="desire-metrics">
              <div>
                <strong>+15 Años</strong>
                <span>Trayectoria en el sector</span>
              </div>
              <div>
                <strong>{mockProperties.length}</strong>
                <span>Propiedades gestionadas</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Operaciones exitosas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIDA DESIRE (MAPA): UBICACIONES */}
      <SkillMapSection
        properties={properties}
        variant="light"
        accent="#0f172a"
        tone="cream"
        label="Interés · ubicación"
        title="Cada propiedad, geolocalizada"
        note="El mapa acompaña el filtro del catálogo bento. Tocá un punto para abrir la ficha de la propiedad."
      />

      {/* AIDA ACTION: MASSIVE FOOTER */}
      <footer className="gpt-action-footer">
        <div className="gpt-container footer-inner">
          <div className="footer-callout">
            <h2>¿Buscás una propiedad o querés tasar la tuya?</h2>
            <p>Hablemos por WhatsApp y coordinemos una reunión personalizada.</p>
            <a 
              href="https://wa.me/5493794675203" 
              target="_blank" 
              rel="noreferrer"
              className="gpt-btn-primary footer-cta"
            >
              Contactar al 3794675203
            </a>
          </div>

          <div className="footer-bottom-bar">
            <div>
              <strong>AURA HABITAT • LUCIANO JENSEN</strong>
              <p>Desarrollos e intermediación inmobiliaria en Corrientes</p>
            </div>
            <div className="footer-skill-tag">
              <span>Skill: gpt-tasteskill</span>
              <label>AIDA Page Framework &amp; Gapless Bento Grid</label>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
