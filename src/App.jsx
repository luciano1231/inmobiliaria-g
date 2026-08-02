import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { PropertyDetails } from './pages/PropertyDetails';
import { AdminDashboard } from './pages/AdminDashboard';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LandingPage } from './pages/LandingPage';
import { Model2 } from './pages/Model2';
import { Model3 } from './pages/Model3';
import './index.css';

function AppContent() {
  const location = useLocation();
  const whatsappNumber = "5491112345678";
  
  // Ocultar Navbar y WhatsApp en la Landing Page y en Model 3 (tiene su propia nav)
  const hideGlobalNav = location.pathname === "/" || location.pathname === "/model-3";

  return (
    <div className="app-container">
      {!hideGlobalNav && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/model-1" element={<Home />} />
          <Route path="/model-2" element={<Model2 />} />
          <Route path="/model-3" element={<Model3 />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      
      {/* Botón flotante global condicional */}
      {!hideGlobalNav && <WhatsAppButton phoneNumber={whatsappNumber} />}
    </div>
  );
}

function App() {
  return (
    <Router basename="/inmobiliaria-g/">
      <AppContent />
    </Router>
  );
}

export default App;

