import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Layers } from 'lucide-react';
import './SkillFloatingBar.css';

export function SkillFloatingBar() {
  return (
    <div className="skill-floating-bar-wrapper">
      <div className="skill-floating-bar">
        <div className="skill-bar-left">
          <Link to="/skills" className="skill-bar-btn skill-bar-btn-back">
            <ArrowLeft size={15} />
            <span>Volver a modelos</span>
          </Link>
        </div>

        <div className="skill-bar-right">
          <Link to="/" className="skill-bar-btn skill-bar-btn-home" title="Landing principal">
            <Home size={15} />
            <span>Inicio</span>
          </Link>
          <Link to="/skills" className="skill-bar-btn skill-bar-btn-pill" title="Ver todos los modelos">
            <Layers size={15} />
            <span>Todos los modelos</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
