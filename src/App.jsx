import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { PropertyDetails } from './pages/PropertyDetails';
import { AdminDashboard } from './pages/AdminDashboard';
import { WhatsAppButton } from './components/WhatsAppButton';
import './index.css';

function App() {
  // Número de WhatsApp configurado (usando un número de ejemplo por defecto)
  const whatsappNumber = "5491112345678";

  return (
    <Router basename="/inmobiliaria-g/">
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        
        {/* Botón flotante global */}
        <WhatsAppButton phoneNumber={whatsappNumber} />
      </div>
    </Router>
  );
}

export default App;
