import React from 'react';
import { SkillMap } from './SkillMap';
import './SkillMapSection.css';

/**
 * Sección de mapa lista para insertar en cualquier modelo de skill.
 * Mantiene el "elemento de mapa" común a todos los modelos.
 *
 * props:
 *  - properties: array de propiedades a marcar
 *  - variant: 'light' | 'dark' | 'mono' | 'blueprint'  (estilo de tiles)
 *  - accent: color de los marcadores
 *  - tone: 'light' | 'dark' | 'cream'  (fondo de la sección)
 *  - label: texto pequeño (eyebrow)
 *  - title: título de la sección
 *  - note: texto secundario opcional
 */
export function SkillMapSection({
  properties = [],
  variant = 'light',
  accent = '#2563eb',
  tone = 'light',
  label = 'Ubicaciones',
  title = 'Explorá las propiedades en el mapa',
  note = 'Cada punto es una propiedad real en Corrientes y localidades cercanas. Tocá un marcador para ver el detalle.',
}) {
  return (
    <section className={`skill-map-section tone-${tone}`}>
      <div className="skill-map-section__inner">
        <div className="skill-map-section__head">
          <span className="skill-map-section__label">{label}</span>
          <h2 className="skill-map-section__title">{title}</h2>
          {note && <p className="skill-map-section__note">{note}</p>}
        </div>
        <div className="skill-map-section__frame">
          <SkillMap
            properties={properties}
            variant={variant}
            accent={accent}
            height="480px"
          />
        </div>
      </div>
    </section>
  );
}
