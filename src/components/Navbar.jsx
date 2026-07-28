import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Settings, Search } from 'lucide-react';
import './Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center navbar-content">
        <Link to="/" className="navbar-logo flex items-center gap-2">
          <Home className="logo-icon" size={28} />
          <span>Inmobi<span className="font-light">Premium</span></span>
        </Link>
        
        <div className="navbar-search glass-dark">
          <Search size={18} className="text-muted" />
          <input type="text" placeholder="Buscar por ciudad o barrio..." />
        </div>

        <div className="navbar-links flex items-center gap-6">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/admin" className="nav-link flex items-center gap-2">
            <Settings size={18} /> Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}
