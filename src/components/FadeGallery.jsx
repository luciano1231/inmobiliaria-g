import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './FadeGallery.css';

/**
 * Slider de fotos con transición cruzada (crossfade) + flechas de navegación.
 *
 * props:
 *  - images: string[]
 *  - alt: string
 *  - height: string  (ej. "240px" | "100%")
 *  - interval: number (ms entre slides, default 4200)
 *  - radius: string  (border-radius, default "0")
 *  - className: string
 *  - showDots: boolean (default true)
 *  - showArrows: boolean (default true)
 *  - cover: boolean (default true)
 */
export function FadeGallery({
  images = [],
  alt = '',
  height = '240px',
  interval = 4200,
  radius = '0',
  className = '',
  showDots = true,
  showArrows = true,
  cover = true,
}) {
  const list = images.length ? images : ['/inmobiliaria-g/images/front-door-house.jpg'];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const go = useCallback(
    (next) => setIndex(((next % list.length) + list.length) % list.length),
    [list.length]
  );

  const step = useCallback(
    (dir) => (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      go(index + dir);
    },
    [go, index]
  );

  useEffect(() => {
    if (list.length < 2 || paused) return undefined;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % list.length);
    }, interval);
    return () => clearInterval(timer.current);
  }, [list.length, paused, interval]);

  const multiple = list.length > 1;

  return (
    <div
      className={`fade-gallery ${className}`}
      style={{ height, borderRadius: radius }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {list.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={i === 0 ? alt : ''}
          aria-hidden={i !== index}
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`fade-gallery__img ${i === index ? 'is-active' : ''}`}
          style={{ objectFit: cover ? 'cover' : 'contain' }}
        />
      ))}

      {multiple && showArrows && (
        <>
          <button
            type="button"
            className="fade-gallery__arrow fade-gallery__arrow--prev"
            aria-label="Foto anterior"
            onClick={step(-1)}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="fade-gallery__arrow fade-gallery__arrow--next"
            aria-label="Foto siguiente"
            onClick={step(1)}
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {multiple && showDots && (
        <div className="fade-gallery__dots">
          {list.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Foto ${i + 1}`}
              className={`fade-gallery__dot ${i === index ? 'is-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                go(i);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
