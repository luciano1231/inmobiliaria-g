import React from 'react';
import { MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight } from 'lucide-react';
import './PropertyCard.css';

export function PropertyCard({ property }) {
  const [currentImage, setCurrentImage] = React.useState(0);

  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImage((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  return (
    <div className="property-card hover-scale">
      <div className="property-image-container">
        <img 
          src={property.images[currentImage]} 
          alt={property.title} 
          className="property-image"
        />
        {property.images.length > 1 && (
          <>
            <button className="carousel-btn prev glass" onClick={prevImage}>
              <ChevronLeft size={20} />
            </button>
            <button className="carousel-btn next glass" onClick={nextImage}>
              <ChevronRight size={20} />
            </button>
            <div className="carousel-indicators">
              {property.images.map((_, idx) => (
                <div key={idx} className={`indicator ${idx === currentImage ? 'active' : ''}`} />
              ))}
            </div>
          </>
        )}
        <div className="property-type glass">{property.type}</div>
      </div>
      
      <div className="property-content">
        <div className="property-price">
          {property.currency} {property.price.toLocaleString()}
        </div>
        <h3 className="property-title">{property.title}</h3>
        
        <div className="property-location text-muted flex items-center gap-2">
          <MapPin size={16} /> {property.location}
        </div>
        
        <div className="property-features">
          {property.bedrooms > 0 && (
            <div className="feature flex items-center gap-2">
              <Bed size={16} /> <span>{property.bedrooms} Dorm.</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="feature flex items-center gap-2">
              <Bath size={16} /> <span>{property.bathrooms} Baños</span>
            </div>
          )}
          {property.area > 0 && (
            <div className="feature flex items-center gap-2">
              <Square size={16} /> <span>{property.area} m²</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
