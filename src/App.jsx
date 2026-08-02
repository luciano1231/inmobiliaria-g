import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { PropertyDetails } from './pages/PropertyDetails';
import { AdminDashboard } from './pages/AdminDashboard';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LandingPage } from './pages/LandingPage';
import { Model2 } from './pages/Model2';
import './index.css';

function AppContent() {
  const location = useLocation();
  const whatsappNumber = "5491112345678";
  
  // Ocultar Navbar y WhatsApp en la Landing Page ("/")
  const isLandingPage = location.pathname === "/";

  return (
    <div className="app-container">
      {!isLandingPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/model-1" element={<Home />} />
          <Route path="/model-2" element={<Model2 />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      
      {/* Botón flotante global condicional */}
      {!isLandingPage && <WhatsAppButton phoneNumber={whatsappNumber} />}
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

