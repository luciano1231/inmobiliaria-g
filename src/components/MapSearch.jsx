import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import {
  mockProperties,
  PROVINCES,
  CITIES_BY_PROVINCE,
  ALL_CITIES,
} from '../data/mockProperties';
import { PropertyCard } from './PropertyCard';
import { Filter, MapPin, X } from 'lucide-react';
import L from 'leaflet';
import './MapSearch.css';

// Fix Leaflet's default icon path issues with vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
const ActiveIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [34, 55],
  iconAnchor: [17, 55],
  popupAnchor: [1, -46],
  className: 'marker-active',
});
L.Marker.prototype.options.icon = DefaultIcon;

const CAPITAL_CENTER = [-27.4692, -58.8306];

const DEFAULT_FILTERS = {
  operation: 'Todas',
  province: 'Todas',
  city: 'Todas',
  type: 'Todos',
  bedrooms: 0,
  bathrooms: 0,
  garage: false,
  priceMax: '',
};

// Ajusta el mapa para que se vean todos los resultados filtrados
function MapController({ points }) {
  const map = useMap();
  useEffect(() => {
    if (!points.length) {
      map.setView(CAPITAL_CENTER, 12);
      return;
    }
    if (points.length === 1) {
      map.setView(points[0], 14);
      return;
    }
    const bounds = L.latLngBounds(points);
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
  }, [points, map]);
  return null;
}

export function MapSearch() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const set = (key, value) =>
    setFilters((f) => {
      const next = { ...f, [key]: value };
      // Si cambia la provincia, reseteamos la ciudad
      if (key === 'province') next.city = 'Todas';
      return next;
    });

  const cityOptions =
    filters.province === 'Todas'
      ? ALL_CITIES
      : [...(CITIES_BY_PROVINCE[filters.province] || [])].sort();

  const filtered = useMemo(() => {
    return mockProperties.filter((p) => {
      if (filters.operation !== 'Todas' && p.operation !== filters.operation) return false;
      if (filters.province !== 'Todas' && p.province !== filters.province) return false;
      if (filters.city !== 'Todas' && p.city !== filters.city) return false;
      if (filters.type !== 'Todos' && p.type !== filters.type) return false;
      if (filters.bedrooms && p.bedrooms < filters.bedrooms) return false;
      if (filters.bathrooms && p.bathrooms < filters.bathrooms) return false;
      if (filters.garage && !p.garage) return false;
      if (filters.priceMax) {
        const max = Number(filters.priceMax);
        if (Number.isFinite(max) && p.price > max) return false;
      }
      return true;
    });
  }, [filters]);

  const points = useMemo(() => filtered.map((p) => p.coordinates), [filtered]);

  const activeCount = Object.keys(DEFAULT_FILTERS).filter(
    (k) => filters[k] !== DEFAULT_FILTERS[k]
  ).length;

  return (
    <div className="map-search-layout" ref={sectionRef}>
      {/* LEFT COLUMN: Map + Filters */}
      <div className="left-column">
        <div className="map-area">
          <MapContainer
            center={CAPITAL_CENTER}
            zoom={12}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={!isMobile}
            dragging={!isMobile}
            touchZoom={false}
          >
            <TileLayer
              attribution='Tiles &copy; Esri'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
              maxZoom={16}
            />
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}"
              maxZoom={16}
            />
            <MapController points={points} />
            {filtered.map((property) => (
              <Marker
                key={property.id}
                position={property.coordinates}
                icon={hoveredId === property.id ? ActiveIcon : DefaultIcon}
                eventHandlers={{
                  mouseover: () => setHoveredId(property.id),
                  mouseout: () => setHoveredId(null),
                }}
              >
                <Popup className="custom-popup">
                  <Link to={`/property/${property.id}`} className="popup-content flex gap-4">
                    <img src={property.images[0]} alt={property.title} />
                    <div>
                      <h4>{property.title}</h4>
                      <p className="popup-op">{property.operation} · {property.city}</p>
                      <p className="price">{property.priceLabel}</p>
                    </div>
                  </Link>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="filters-container">
          <div className="flex items-center justify-between filters-title">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-secondary" />
              <h3>Filtros</h3>
            </div>
            {activeCount > 0 && (
              <button className="clear-filters" onClick={() => setFilters(DEFAULT_FILTERS)}>
                <X size={14} /> Limpiar
              </button>
            )}
          </div>

          {/* Operación */}
          <div className="filter-group">
            <label>Operación</label>
            <div className="filter-pills">
              {['Todas', 'Venta', 'Alquiler'].map((op) => (
                <button
                  key={op}
                  className={`filter-pill ${filters.operation === op ? 'active' : ''}`}
                  onClick={() => set('operation', op)}
                >
                  {op}
                </button>
              ))}
            </div>
          </div>

          {/* Tipo */}
          <div className="filter-group">
            <label>Tipo de inmueble</label>
            <div className="filter-pills">
              {['Todos', 'Casa', 'Departamento', 'Terreno'].map((t) => (
                <button
                  key={t}
                  className={`filter-pill ${filters.type === t ? 'active' : ''}`}
                  onClick={() => set('type', t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Provincia + Ciudad */}
          <div className="filter-group">
            <label htmlFor="f-province">Provincia</label>
            <select
              id="f-province"
              value={filters.province}
              onChange={(e) => set('province', e.target.value)}
            >
              <option value="Todas">Todas</option>
              {PROVINCES.map((pr) => (
                <option key={pr} value={pr}>{pr}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="f-city">Ciudad / Localidad</label>
            <select
              id="f-city"
              value={filters.city}
              onChange={(e) => set('city', e.target.value)}
            >
              <option value="Todas">Todas</option>
              {cityOptions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Dormitorios + Baños */}
          <div className="filter-row">
            <div className="filter-group">
              <label htmlFor="f-bed">Dormitorios (mín.)</label>
              <select
                id="f-bed"
                value={filters.bedrooms}
                onChange={(e) => set('bedrooms', Number(e.target.value))}
              >
                <option value={0}>Indistinto</option>
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n}+</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="f-bath">Baños (mín.)</label>
              <select
                id="f-bath"
                value={filters.bathrooms}
                onChange={(e) => set('bathrooms', Number(e.target.value))}
              >
                <option value={0}>Indistinto</option>
                {[1, 2, 3].map((n) => (
                  <option key={n} value={n}>{n}+</option>
                ))}
              </select>
            </div>
          </div>

          {/* Precio máximo */}
          <div className="filter-group">
            <label htmlFor="f-price">
              Precio máx. {filters.operation === 'Alquiler' ? '(ARS/mes)' : filters.operation === 'Venta' ? '(USD)' : ''}
            </label>
            <input
              id="f-price"
              type="number"
              min="0"
              placeholder="Sin límite"
              value={filters.priceMax}
              onChange={(e) => set('priceMax', e.target.value)}
            />
          </div>

          {/* Cochera */}
          <label className="filter-check">
            <input
              type="checkbox"
              checked={filters.garage}
              onChange={(e) => set('garage', e.target.checked)}
            />
            <span>Con cochera</span>
          </label>

          <div className="results-count">
            <MapPin size={16} />
            <span>{filtered.length} propiedades encontradas</span>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Properties Grid */}
      <div className="right-column">
        <div className="properties-grid">
          {filtered.length === 0 ? (
            <div className="no-results">
              No se encontraron propiedades con esos filtros.
              <br />
              <button className="clear-filters inline" onClick={() => setFilters(DEFAULT_FILTERS)}>
                Limpiar filtros
              </button>
            </div>
          ) : (
            filtered.map((property, index) => (
              <Link
                to={`/property/${property.id}`}
                key={property.id}
                className={`fade-in-item ${hoveredId === property.id ? 'card-active' : ''}`}
                style={{ animationDelay: `${Math.min(index, 8) * 0.06}s` }}
                onMouseEnter={() => setHoveredId(property.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <PropertyCard property={property} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
