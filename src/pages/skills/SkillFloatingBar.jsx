import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Home, Layers } from 'lucide-react';
import './SkillFloatingBar.css';

export function SkillFloatingBar({ skillName, skillTitle, archetype }) {
  return (
    <div className="skill-floating-bar-wrapper">
      <div className="skill-floating-bar">
        <div className="skill-bar-left">
          <Link to="/skills" className="skill-bar-btn skill-bar-btn-back">
            <ArrowLeft size={15} />
            <span>Volver al Hub</span>
          </Link>
          <div className="skill-bar-badge">
            <Sparkles size={13} className="sparkle-icon" />
            <span className="skill-badge-name">{skillName}</span>
            {archetype && <span className="skill-badge-archetype">• {archetype}</span>}
          </div>
        </div>

        <div className="skill-bar-right">
          <Link to="/" className="skill-bar-btn skill-bar-btn-home" title="Ir a la Landing Original">
            <Home size={15} />
            <span>Landing Original</span>
          </Link>
          <Link to="/skills" className="skill-bar-btn skill-bar-btn-pill" title="Ver todos los 13 modelos">
            <Layers size={15} />
            <span>13 Modelos</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
