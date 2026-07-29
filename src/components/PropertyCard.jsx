import React, { useRef, useState } from 'react';
import { MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight, Car, Waves } from 'lucide-react';
import './PropertyCard.css';

export function PropertyCard({ property }) {
  const carouselRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const width = carouselRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== currentImage) {
        setCurrentImage(newIndex);
      }
    }
  };

  const scrollToImage = (index) => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: index * width,
        behavior: 'smooth'
      });
    }
  };

  const nextImage = (e) => {
    e.preventDefault();
    scrollToImage((currentImage + 1) % property.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    scrollToImage(currentImage === 0 ? property.images.length - 1 : currentImage - 1);
  };

  return (
    <div className="property-card hover-scale">
      <div className="property-image-container">
        <div 
          className="property-images-scroll" 
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {property.images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`${property.title} - ${idx + 1}`} 
              className="property-image snap-item"
            />
          ))}
        </div>
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
                <div 
                  key={idx} 
                  className={`indicator ${idx === currentImage ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToImage(idx);
                  }}
                />
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
          {property.amenities?.includes("Cochera") && (
            <div className="feature flex items-center gap-2">
              <Car size={16} /> <span>Coch.</span>
            </div>
          )}
          {property.amenities?.includes("Piscina") && (
            <div className="feature flex items-center gap-2">
              <Waves size={16} /> <span>Pisc.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
