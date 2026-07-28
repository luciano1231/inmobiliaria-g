import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProperties } from '../data/mockProperties';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { MapPin, Bed, Bath, Square, ArrowLeft, CheckCircle2 } from 'lucide-react';
import './PropertyDetails.css';

export function PropertyDetails() {
  const { id } = useParams();
  const property = mockProperties.find(p => p.id === parseInt(id));

  if (!property) {
    return <div className="container" style={{ marginTop: '100px' }}>Propiedad no encontrada</div>;
  }

  return (
    <div className="property-details-page">
      <div className="container">
        <Link to="/" className="back-link flex items-center gap-2">
          <ArrowLeft size={20} /> Volver al inicio
        </Link>

        <div className="details-header flex justify-between items-center">
          <div>
            <h1 className="details-title">{property.title}</h1>
            <div className="details-location text-muted flex items-center gap-2">
              <MapPin size={18} /> {property.location}
            </div>
          </div>
          <div className="details-price">
            {property.currency} {property.price.toLocaleString()}
          </div>
        </div>

        <div className="image-gallery">
          <img src={property.images[0]} alt="Principal" className="main-image" />
          <div className="thumbnail-grid">
            {property.images.slice(1).map((img, idx) => (
              <img key={idx} src={img} alt={`Vista ${idx + 2}`} className="thumbnail-image" />
            ))}
          </div>
        </div>

        <div className="details-content flex gap-6">
          <div className="main-content">
            <div className="features-bar glass flex justify-between">
              {property.bedrooms > 0 && (
                <div className="feature-item flex items-center gap-2">
                  <Bed size={24} className="text-primary" />
                  <div>
                    <strong>{property.bedrooms}</strong>
                    <span>Habitaciones</span>
                  </div>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="feature-item flex items-center gap-2">
                  <Bath size={24} className="text-primary" />
                  <div>
                    <strong>{property.bathrooms}</strong>
                    <span>Baños</span>
                  </div>
                </div>
              )}
              {property.area > 0 && (
                <div className="feature-item flex items-center gap-2">
                  <Square size={24} className="text-primary" />
                  <div>
                    <strong>{property.area}</strong>
                    <span>Metros Cuadrados</span>
                  </div>
                </div>
              )}
            </div>

            <div className="description-section">
              <h2>Descripción</h2>
              <p>{property.description}</p>
            </div>

            <div className="amenities-section">
              <h2>Características y Amenities</h2>
              <div className="amenities-grid">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="amenity-item flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-accent" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sidebar-content">
            <div className="contact-card glass">
              <h3>¿Te interesa esta propiedad?</h3>
              <p className="text-muted">Contacta a un agente ahora mismo para organizar una visita.</p>
              <a 
                href={`https://wa.me/${property.whatsapp}?text=${encodeURIComponent(`Hola! Estoy interesado en la propiedad: ${property.title} (ID: ${property.id})`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-100"
              >
                Contactar por WhatsApp
              </a>
            </div>

            <div className="map-card glass">
              <h3>Ubicación</h3>
              <div className="mini-map">
                <MapContainer 
                  center={property.coordinates} 
                  zoom={14} 
                  style={{ height: '250px', width: '100%', borderRadius: 'var(--radius-md)' }}
                >
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                  />
                  <Marker position={property.coordinates} />
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
