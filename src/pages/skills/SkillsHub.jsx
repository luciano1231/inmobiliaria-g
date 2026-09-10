import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Sparkles, Layers, Cpu, Compass, 
  Smartphone, Code, Shield, Palette, Zap, BookOpen 
} from 'lucide-react';
import './SkillsHub.css';

export const SKILL_MODELS_DATA = [
  {
    id: 'brutalist-skill',
    name: 'brutalist-skill',
    title: 'Industrial Brutalism & Tactical Telemetry',
    category: 'Industriales & Técnicos',
    badge: 'Swiss Blueprint • CRT Dark',
    desc: 'Bordes rígidos a 90°, telemetría de datos monospaced, acento rojo aviación (#E61919), encuadres ASCII y cero border-radius.',
    img: '/inmobiliaria-g/images/small-figurine-blueprint.jpg',
    route: '/skills/brutalist-skill',
    traits: ['90° Sharp Corners', 'JetBrains Mono', 'Aviation Red #E61919', 'ASCII Framing']
  },
  {
    id: 'minimalist-skill',
    name: 'minimalist-skill',
    title: 'Premium Utilitarian Minimalism',
    category: 'Editoriales & Minimalistas',
    badge: 'Warm Bone • Serif Editorial',
    desc: 'Lienzo cálido hueso (#F7F6F3), tipografía serif de alta jerarquía, cuadrícula bento plana con 1px de borde, pasteles desaturados y cero sombras duras.',
    img: '/inmobiliaria-g/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg',
    route: '/skills/minimalist-skill',
    traits: ['Warm Bone #F7F6F3', 'Editorial Serif', '1px #EAEAEA Bento', 'Zero Shadow']
  },
  {
    id: 'soft-skill',
    name: 'soft-skill',
    title: 'High-End Visual Design ($150k Agency)',
    category: 'Alta Gama & Agency',
    badge: 'Apple / Linear Tier • Doppelrand',
    desc: 'Arquitectura "Double-Bezel" (doppelrand anidado), botones con ícono anidado (button-in-button), navbar isla flotante y ritmo espacial generoso.',
    img: '/inmobiliaria-g/images/arquitectura-moderna-apartamentos_1268-14696.avif',
    route: '/skills/soft-skill',
    traits: ['Double-Bezel Nested', 'Button-in-Button', 'Floating Pill Nav', 'Deep Luxury']
  },
  {
    id: 'stitch-skill',
    name: 'stitch-skill',
    title: 'Stitch Design Taste (Semantic DS)',
    category: 'Alta Gama & Agency',
    badge: 'Zinc Neutrals • Electric Teal',
    desc: 'Base neutrales Zinc, acento singular de alto contraste, tipografía track-tight, hero asimétrico dividido y físicas spring.',
    img: '/inmobiliaria-g/images/front-door-house.jpg',
    route: '/skills/stitch-skill',
    traits: ['Zinc-950 Base', 'Cyan Accent', 'Asymmetric Split Hero', 'Inline Photo Tag']
  },
  {
    id: 'gpt-tasteskill',
    name: 'gpt-tasteskill',
    title: 'Elite UX/UI & Motion (Awwwards-Tier)',
    category: 'Alta Gama & Agency',
    badge: 'AIDA Framework • Gapless Bento',
    desc: 'Hero amplio de 2 líneas garantizadas con micro-fotos tipográficas inline, cuadrícula bento sin espacios muertos (grid-flow-dense) y capítulos cinematográficos.',
    img: '/inmobiliaria-g/images/beautiful-shot-white-building-hamilton-gardens-new-zealand-blue-sky.jpg',
    route: '/skills/gpt-tasteskill',
    traits: ['2-Line Wide Hero', 'Dense Gapless Bento', 'Inline Heading Photos', 'AIDA Structure']
  },
  {
    id: 'taste-skill',
    name: 'taste-skill',
    title: 'Anti-Slop Modern Creative',
    category: 'Editoriales & Minimalistas',
    badge: 'Neo-Editorial • Dials 8 / 6 / 4',
    desc: 'Diseño no-plantillero con alta varianza, flujo alternado asimétrico, tipografía con carácter y auditoría de habitabilidad genuina.',
    img: '/inmobiliaria-g/images/Edificio-en-Libertad-171-Tucuman-11-730x1024.jpg',
    route: '/skills/taste-skill',
    traits: ['Variance 8 / Motion 6', 'Anti-Slop Layout', 'Alternating Stream', 'Dossier Action']
  },
  {
    id: 'brandkit',
    name: 'brandkit',
    title: 'Brand Guidelines & Identity Hub',
    category: 'Industriales & Técnicos',
    badge: 'Charcoal Presentation Board',
    desc: 'Lienzo charcoal oscuro, paneles de especificación de identidad, taxonomía de color de la marca, principios de solidez notarial y activos aplicados.',
    img: '/inmobiliaria-g/images/DSC_0453-Editar-Editar.webp',
    route: '/skills/brandkit',
    traits: ['Charcoal Boards', 'Color Taxonomy Chips', 'Logo System', 'Strategic Pillars']
  },
  {
    id: 'redesign-skill',
    name: 'redesign-skill',
    title: 'Modern Architectural Redesign',
    category: 'Alta Gama & Agency',
    badge: 'Audit-First • 2-Column Zig-Zag',
    desc: 'Reemplazo de la típica fila de 3 tarjetas iguales por un layout zig-zag de 2 columnas con ritmo visual equilibrado, sombra teñida y acentos ámbar sobrios.',
    img: '/inmobiliaria-g/images/house-isolated-field.jpg',
    route: '/skills/redesign-skill',
    traits: ['2-Col Zig-Zag', 'Anti-Pattern Fix', 'Negative Tracking', 'Amber Ochre #E09F3E']
  },
  {
    id: 'imagegen-frontend-mobile',
    name: 'imagegen-frontend-mobile',
    title: 'Native Mobile App Simulator',
    category: 'Mobile & Media',
    badge: 'Interactive iPhone Mockup',
    desc: 'Simulador táctil interactivo enmarcado en un iPhone con Dynamic Island, safe-area, tabs de navegación inferior, feed swipeable y vista de mapa.',
    img: '/inmobiliaria-g/images/102974-el-ipv-sorteara-466-departamentos-en-capital-y-se-podra-ver-en-vivo.webp',
    route: '/skills/imagegen-frontend-mobile',
    traits: ['iPhone Hardware Frame', 'Bottom Tab Nav', 'Safe Area', 'Touch Targets 44px']
  },
  {
    id: 'imagegen-frontend-web',
    name: 'imagegen-frontend-web',
    title: 'Section-by-Section Narrative Web',
    category: 'Mobile & Media',
    badge: 'Horizontal Visual Chapters',
    desc: 'Narrativa visual capítulo por capítulo con escalas de hero variables (horizonte litoral, foco arquitectónico, retiro ribereño y epílogo patrimonial).',
    img: '/inmobiliaria-g/images/vacation-mykonos-travel-tourism-village.jpg',
    route: '/skills/imagegen-frontend-web',
    traits: ['1 Story per Section', 'Grand Horizon Hero', 'Varied Scale', 'Storytelling Flow']
  },
  {
    id: 'image-to-code-skill',
    name: 'image-to-code-skill',
    title: 'Image-to-Code Visual Fidelity',
    category: 'Industriales & Técnicos',
    badge: 'Pixel Fidelity • Spec Tokens',
    desc: 'Composición dual arte-render y datos técnicos, panel de tokens JSON inspectables y selector dinámico de propiedades para renderizado visual.',
    img: '/inmobiliaria-g/images/disenos.departamentos.software.1.jpg',
    route: '/skills/image-to-code-skill',
    traits: ['High Fidelity Render', 'JSON Spec Inspector', 'Dual Hero Stage', 'Interactive Track']
  },
  {
    id: 'taste-skill-v1',
    name: 'taste-skill-v1',
    title: 'Taste-Skill v1 Original',
    category: 'Editoriales & Minimalistas',
    badge: 'Vintage Anti-Slop Classic',
    desc: 'La primera generación del movimiento anti-slop: titulares masivos, alto contraste con acentos amarillos, sombras sólidas de 6px y estética cruda.',
    img: '/inmobiliaria-g/images/post-image-6c7e19a2-b479-46a7-ae67-74cc78d87422-0-1778780777807.jpg',
    route: '/skills/taste-skill-v1',
    traits: ['Massive Impact Type', 'Solid 6px Box Shadow', 'Raw Energy', 'Amber Highlight']
  },
  {
    id: 'output-skill',
    name: 'output-skill',
    title: 'Full-Output Exhaustive Matrix',
    category: 'Industriales & Técnicos',
    badge: 'Zero Truncation Data Matrix',
    desc: 'Tabla comparativa completa sin registros omitidos ni filtros recortados, con desglose analítico en profundidad de cada unidad de la base de datos.',
    img: '/inmobiliaria-g/images/house-key-calculator-with-dollar-bills.jpg',
    route: '/skills/output-skill',
    traits: ['Full Dataset Matrix', 'Tabular Numbers', 'Zero Truncation', 'Deep Inspector']
  }
];

export function SkillsHub() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = [
    'Todos', 
    'Alta Gama & Agency', 
    'Editoriales & Minimalistas', 
    'Industriales & Técnicos', 
    'Mobile & Media'
  ];

  const filtered = selectedCategory === 'Todos'
    ? SKILL_MODELS_DATA
    : SKILL_MODELS_DATA.filter(m => m.category === selectedCategory);

  return (
    <div className="skills-hub-page">
      {/* TOP FLOATING / FIXED ACTION HEADER */}
      <header className="hub-top-header">
        <div className="hub-container hub-header-flex">
          <Link to="/" className="hub-back-btn">
            <ArrowLeft size={16} />
            <span>Volver a la Landing Original</span>
          </Link>
          <div className="hub-pill-tag">
            <Sparkles size={14} className="sparkle-amber" />
            <span>Agent Skills Lab • 13 Diseños Exclusivos</span>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hub-hero">
        <div className="hub-container">
          <span className="hub-kicker">SUITE DE MODELOS (.agent/skills)</span>
          <h1 className="hub-title">
            Un diseño de Landing Page por cada Skill instalada.
          </h1>
          <p className="hub-subtitle">
            Cada modelo ha sido construido respetando exhaustivamente las directivas estéticas, tipográficas y de layout de su respectiva skill en <code className="hub-code">.agent/skills/</code>. Comparten el catálogo inmobiliario de Corrientes, pero cada uno ofrece una experiencia radicalmente diferente.
          </p>

          {/* CATEGORY FILTER CHIPS */}
          <div className="hub-filter-chips">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-chip ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat} {cat === 'Todos' ? `(${SKILL_MODELS_DATA.length})` : ''}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODELS SHOWCASE GRID */}
      <main className="hub-main">
        <div className="hub-container">
          <div className="hub-cards-grid">
            {filtered.map(model => (
              <article key={model.id} className="hub-card">
                <div className="hub-card-media">
                  <img src={model.img} alt={model.title} />
                  <span className="hub-badge-pill">{model.badge}</span>
                  <div className="hub-media-overlay">
                    <Link to={model.route} className="hub-btn-preview">
                      Ver {model.name} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className="hub-card-body">
                  <div className="hub-card-meta">
                    <span className="skill-name-tag">{model.name}</span>
                    <span className="cat-text">{model.category}</span>
                  </div>

                  <h3 className="hub-card-title">{model.title}</h3>
                  <p className="hub-card-desc">{model.desc}</p>

                  <div className="hub-card-traits">
                    {model.traits.map(t => (
                      <span key={t} className="trait-pill">{t}</span>
                    ))}
                  </div>

                  <Link to={model.route} className="hub-direct-link">
                    <span>Abrir modelo {model.name}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="hub-footer">
        <div className="hub-container footer-content-row">
          <div>
            <strong>Inmobiliaria G • Luciano Gonzalez Jensen</strong>
            <p>Laboratorio de Diseño y Modelos de Landing Pages por Skills</p>
          </div>
          <div className="hub-footer-links">
            <Link to="/" className="btn-secondary-link">Landing Original (3 Modelos)</Link>
            <a href="https://wa.me/5493794675203" target="_blank" rel="noreferrer" className="btn-contact-link">
              Contacto WhatsApp: 3794675203
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
