import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import { mockProperties } from '../data/mockProperties';
import { PropertyCard } from './PropertyCard';
import { Filter } from 'lucide-react';
import L from 'leaflet';
import './MapSearch.css';

// Fix Leaflet's default icon path issues with webpack/vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export function MapSearch() {
  const [properties, setProperties] = useState(mockProperties);
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filterProperties = (type) => {
    setActiveFilter(type);
    if (type === 'Todos') {
      setProperties(mockProperties);
    } else {
      setProperties(mockProperties.filter(p => p.type === type));
    }
  };

  return (
    <div className="map-search-layout">
      {/* Sidebar with Grid */}
      <div className="search-sidebar">
        <div className="filters-container glass">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-secondary" />
            <h2 style={{ fontSize: '1.1rem' }}>Filtros</h2>
          </div>
          <div className="flex gap-2 filter-pills">
            {['Todos', 'Casa', 'Departamento', 'Terreno'].map(type => (
              <button 
                key={type}
                className={`filter-pill ${activeFilter === type ? 'active' : ''}`}
                onClick={() => filterProperties(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="properties-grid">
          {properties.length === 0 ? (
            <div className="no-results">No se encontraron propiedades.</div>
          ) : (
            properties.map(property => (
              <Link to={`/property/${property.id}`} key={property.id}>
                <PropertyCard property={property} />
              </Link>
            ))
          )}
        </div>
      </div>

      {/* Map Area */}
      <div className="map-area">
        <MapContainer 
          center={[-27.4692, -58.8306]} 
          zoom={13} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          {properties.map(property => (
            <Marker key={property.id} position={property.coordinates}>
              <Popup className="custom-popup">
                <Link to={`/property/${property.id}`} className="popup-content flex gap-4">
                  <img src={property.images[0]} alt={property.title} />
                  <div>
                    <h4>{property.title}</h4>
                    <p className="price">{property.currency} {property.price.toLocaleString()}</p>
                  </div>
                </Link>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
