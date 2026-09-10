import React, { useState } from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { FadeGallery } from '../../../components/FadeGallery';
import { SkillMap } from '../../../components/SkillMap';
import {
  Compass, Heart, Map, User, Search, SlidersHorizontal, 
  MapPin, BedDouble, Bath, ArrowUpRight, Share2, Sparkles, Battery, Wifi, Signal 
} from 'lucide-react';
import './ModelMobileApp.css';

export function ModelMobileApp() {
  const [activeTab, setActiveTab] = useState('explore');
  const [filterType, setFilterType] = useState('Todos');
  const [activePropertyIndex, setActivePropertyIndex] = useState(0);
  const [favorites, setFavorites] = useState([1]);

  const filtered = filterType === 'Todos'
    ? mockProperties.slice(0, 5)
    : mockProperties.filter(p => p.type === filterType).slice(0, 5);

  const currentProp = filtered[activePropertyIndex] || filtered[0];

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(f => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="mobile-skill-page">
      <SkillFloatingBar 
        skillName="imagegen-frontend-mobile" 
        skillTitle="Native Mobile App Simulator" 
        archetype="Interactive iPhone Mockup • App-Native UX" 
      />

      <div className="mobile-showcase-container">
        {/* DESKTOP CONTEXT INTRO (LEFT SIDE) */}
        <div className="mobile-context-column">
          <div className="mobile-skill-pill">
            <Sparkles size={13} />
            <span>DISPOSITIVO MÓVIL INTERACTIVO</span>
          </div>

          <h1 className="context-title">
            Experiencia Inmobiliaria 100% Nativa en la Palma de tu Mano.
          </h1>

          <p className="context-desc">
            Diseñado según las pautas de <strong style={{color:'#fff'}}>imagegen-frontend-mobile</strong>: interfaz app-native con safe-area awareness, navegación táctil por pestañas inferiores, feed de propiedades interactivas y contacto instantáneo vía WhatsApp.
          </p>

          <div className="context-features">
            <div className="c-feature">
              <strong>Simulador en Vivo:</strong>
              <span>Hacé clic en las tarjetas, pestañas inferiores y filtros del teléfono.</span>
            </div>
            <div className="c-feature">
              <strong>Optimizado para Touch:</strong>
              <span>Áreas de toque mínimas de 44px y jerarquía clara sin recargar la pantalla.</span>
            </div>
          </div>
        </div>

        {/* PHONE DEVICE MOCKUP FRAME (RIGHT SIDE) */}
        <div className="phone-device-wrapper">
          <div className="iphone-frame">
            {/* DYNAMIC ISLAND / NOTCH */}
            <div className="dynamic-island-bar">
              <span className="phone-time">09:41</span>
              <div className="dynamic-island"></div>
              <div className="phone-signals">
                <Signal size={12} />
                <Wifi size={12} />
                <Battery size={14} />
              </div>
            </div>

            {/* PHONE INNER CONTENT */}
            <div className="phone-screen-content">
              {/* APP TOP SEARCH BAR */}
              <div className="app-top-header">
                <div className="app-search-input">
                  <Search size={14} className="search-ico" />
                  <input type="text" placeholder="Buscar en Corrientes..." readOnly />
                  <SlidersHorizontal size={14} className="filter-ico" />
                </div>

                <div className="app-chip-row">
                  {['Todos', 'Casa', 'Departamento', 'Terreno'].map(t => (
                    <button 
                      key={t}
                      onClick={() => { setFilterType(t); setActivePropertyIndex(0); }}
                      className={`app-chip ${filterType === t ? 'active' : ''}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* ACTIVE VIEW BASED ON TAB */}
              {activeTab === 'explore' && (
                <div className="app-feed-scroll">
                  {filtered.map((prop, idx) => (
                    <article key={prop.id} className="mobile-prop-card">
                      <div className="prop-thumb-box">
                        <FadeGallery images={prop.images} alt={prop.title} height="150px" showDots={false} />
                        <span className="mobile-tag-op">{prop.operation}</span>
                        <button 
                          onClick={() => toggleFavorite(prop.id)}
                          className={`heart-btn ${favorites.includes(prop.id) ? 'saved' : ''}`}
                        >
                          <Heart size={14} fill={favorites.includes(prop.id) ? '#ef4444' : 'none'} />
                        </button>
                        <div className="mobile-price-chip">{prop.priceLabel}</div>
                      </div>

                      <div className="prop-mobile-details">
                        <span className="prop-mobile-loc"><MapPin size={11} /> {prop.location}</span>
                        <h4 className="prop-mobile-title">{prop.title}</h4>
                        
                        <div className="prop-mobile-specs">
                          <span><BedDouble size={12} /> {prop.bedrooms || 0}</span>
                          <span><Bath size={12} /> {prop.bathrooms || 1}</span>
                          <span>{prop.area} m²</span>
                        </div>

                        <a 
                          href={`https://wa.me/${prop.whatsapp}?text=Hola,%20consulta%20por%20la%20propiedad:%20${encodeURIComponent(prop.title)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="mobile-wa-cta"
                        >
                          <span>Consultar por WhatsApp</span>
                          <ArrowUpRight size={13} />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {activeTab === 'map' && (
                <div className="app-map-view">
                  <SkillMap
                    properties={filtered}
                    variant="light"
                    accent="#ef4444"
                    height="100%"
                    zoomControl={false}
                  />
                  <div className="map-card-popup">
                    <img src={currentProp.images[0]} alt="Prop" />
                    <div>
                      <strong>{currentProp.title}</strong>
                      <p>{currentProp.priceLabel}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'favorites' && (
                <div className="app-favs-view">
                  <div className="empty-favs">
                    <Heart size={28} className="empty-heart-icon" />
                    <h4>Propiedades Guardadas</h4>
                    <p>Tenés {favorites.length} propiedad(es) marcada(s) como favoritas.</p>
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div className="app-profile-view">
                  <div className="profile-box">
                    <div className="profile-avatar">LJ</div>
                    <h4>Luciano Jensen</h4>
                    <span>Inmobiliaria G • Corrientes</span>
                    <a href="https://wa.me/5493794675203" target="_blank" rel="noreferrer" className="profile-call-btn">
                      Abrir Chat Directo
                    </a>
                  </div>
                </div>
              )}

              {/* APP BOTTOM NAVIGATION TABS */}
              <nav className="app-bottom-nav">
                <button 
                  onClick={() => setActiveTab('explore')}
                  className={`nav-tab-item ${activeTab === 'explore' ? 'active' : ''}`}
                >
                  <Compass size={18} />
                  <span>Explorar</span>
                </button>
                <button 
                  onClick={() => setActiveTab('map')}
                  className={`nav-tab-item ${activeTab === 'map' ? 'active' : ''}`}
                >
                  <Map size={18} />
                  <span>Mapa</span>
                </button>
                <button 
                  onClick={() => setActiveTab('favorites')}
                  className={`nav-tab-item ${activeTab === 'favorites' ? 'active' : ''}`}
                >
                  <Heart size={18} />
                  <span>Guardados</span>
                </button>
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`nav-tab-item ${activeTab === 'profile' ? 'active' : ''}`}
                >
                  <User size={18} />
                  <span>Contacto</span>
                </button>
              </nav>

              {/* HOME INDICATOR */}
              <div className="iphone-home-indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
