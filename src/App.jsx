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

// SKILLS LAB & MODELS IMPORTS
import { SkillsHub } from './pages/skills/SkillsHub';
import { ModelMinimalist } from './pages/skills/models/ModelMinimalist';
import { ModelSoftSkill } from './pages/skills/models/ModelSoftSkill';
import { ModelStitch } from './pages/skills/models/ModelStitch';
import { ModelGptTaste } from './pages/skills/models/ModelGptTaste';
import { ModelTasteSkill } from './pages/skills/models/ModelTasteSkill';
import { ModelBrandkit } from './pages/skills/models/ModelBrandkit';
import { ModelRedesign } from './pages/skills/models/ModelRedesign';
import { ModelMobileApp } from './pages/skills/models/ModelMobileApp';
import { ModelImagegenWeb } from './pages/skills/models/ModelImagegenWeb';
import { ModelImageToCode } from './pages/skills/models/ModelImageToCode';
import { ModelTasteSkillV1 } from './pages/skills/models/ModelTasteSkillV1';
import { ModelOutputSkill } from './pages/skills/models/ModelOutputSkill';
import { ModelExtraAurora } from './pages/skills/models/ModelExtraAurora';
import { ModelExtraSignature } from './pages/skills/models/ModelExtraSignature';
import { ModelExtraGaleria } from './pages/skills/models/ModelExtraGaleria';
import { ModelExtraPanorama } from './pages/skills/models/ModelExtraPanorama';
import { ModelExtraVitrina } from './pages/skills/models/ModelExtraVitrina';

import './index.css';

function AppContent() {
  const location = useLocation();
  const whatsappNumber = "5491112345678";
  
  // Ocultar Navbar y WhatsApp en la Landing Page, Model 3 y en todas las páginas de Skills
  const hideGlobalNav = 
    location.pathname === "/" || 
    location.pathname === "/model-3" || 
    location.pathname.startsWith("/skills");

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

          {/* HUB CENTRAL DE SKILLS */}
          <Route path="/skills" element={<SkillsHub />} />

          {/* MODELOS DE SKILLS */}
          <Route path="/skills/minimalist-skill" element={<ModelMinimalist />} />
          <Route path="/skills/soft-skill" element={<ModelSoftSkill />} />
          <Route path="/skills/stitch-skill" element={<ModelStitch />} />
          <Route path="/skills/gpt-tasteskill" element={<ModelGptTaste />} />
          <Route path="/skills/taste-skill" element={<ModelTasteSkill />} />
          <Route path="/skills/brandkit" element={<ModelBrandkit />} />
          <Route path="/skills/redesign-skill" element={<ModelRedesign />} />
          <Route path="/skills/imagegen-frontend-mobile" element={<ModelMobileApp />} />
          <Route path="/skills/imagegen-frontend-web" element={<ModelImagegenWeb />} />
          <Route path="/skills/image-to-code-skill" element={<ModelImageToCode />} />
          <Route path="/skills/taste-skill-v1" element={<ModelTasteSkillV1 />} />
          <Route path="/skills/output-skill" element={<ModelOutputSkill />} />

          {/* 5 MODELOS EXTRA (lo mejor de los demás, en tonos claros) */}
          <Route path="/skills/extra-aurora" element={<ModelExtraAurora />} />
          <Route path="/skills/extra-signature" element={<ModelExtraSignature />} />
          <Route path="/skills/extra-galeria" element={<ModelExtraGaleria />} />
          <Route path="/skills/extra-panorama" element={<ModelExtraPanorama />} />
          <Route path="/skills/extra-vitrina" element={<ModelExtraVitrina />} />
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
