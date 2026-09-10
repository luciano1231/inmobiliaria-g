import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './VerFichaLink.css';

/**
 * Enlace a la página de detalle de una propiedad.
 * Hereda el color del contexto; estilo neutro para encajar en cualquier modelo.
 */
export function VerFichaLink({ id, label = 'Ver ficha completa', className = '' }) {
  return (
    <Link to={`/property/${id}`} className={`ver-ficha-link ${className}`}>
      <span>{label}</span>
      <ArrowRight size={14} />
    </Link>
  );
}
