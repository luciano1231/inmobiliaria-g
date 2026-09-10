import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Sparkles, Layers, Cpu, Compass, 
  Smartphone, Code, Shield, Palette, Zap, BookOpen 
} from 'lucide-react';
import './SkillsHub.css';

export const SKILL_MODELS_DATA = [
  {
    id: 'extra-aurora',
    name: 'extra-aurora',
    title: 'Aurora · Editorial cálido',
    category: 'Extra (recomendados)',
    badge: 'Crema · serif · foto grande',
    desc: 'Paleta cálida en crema con títulos serif y una grilla tipo bento donde la primera propiedad ocupa el doble de ancho. Fotos protagonistas.',
    img: '/inmobiliaria-g/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg',
    route: '/skills/extra-aurora',
    traits: ['Fondo crema', 'Títulos serif', 'Grilla bento', 'Fichas con flechas'],
  },
  {
    id: 'extra-signature',
    name: 'extra-signature',
    title: 'Signature · Agencia premium',
    category: 'Extra (recomendados)',
    badge: 'Azul · hero dividido · aire',
    desc: 'Layout dividido con texto a la izquierda y foto grande a la derecha, mucho espacio en blanco y tarjetas de tres columnas. Tono azul sobrio.',
    img: '/inmobiliaria-g/images/arquitectura-moderna-apartamentos_1268-14696.avif',
    route: '/skills/extra-signature',
    traits: ['Hero dividido', 'Azul #1F4B8E', 'Tarjetas 3 col', 'Mucho aire'],
  },
  {
    id: 'extra-galeria',
    name: 'extra-galeria',
    title: 'Galería · Revista de arquitectura',
    category: 'Extra (recomendados)',
    badge: 'Blanco · filas alternadas',
    desc: 'Cada propiedad como una pieza de revista: foto amplia a un lado y ficha al otro, alternando el lado en cada fila. Acentos dorados.',
    img: '/inmobiliaria-g/images/Edificio-en-Libertad-171-Tucuman-11-730x1024.jpg',
    route: '/skills/extra-galeria',
    traits: ['Filas alternadas', 'Serif display', 'Dorado #A9803F', 'Foto grande'],
  },
  {
    id: 'extra-panorama',
    name: 'extra-panorama',
    title: 'Panorama · El mapa primero',
    category: 'Extra (recomendados)',
    badge: 'Verde · mapa en el hero',
    desc: 'El mapa aparece en la parte superior, junto al título, y debajo se despliega el catálogo en tarjetas compactas. Ideal para buscar por zona.',
    img: '/inmobiliaria-g/images/house-isolated-field.jpg',
    route: '/skills/extra-panorama',
    traits: ['Mapa en el hero', 'Verde #2F7D5D', 'Tarjetas compactas', 'Buscar por zona'],
  },
  {
    id: 'extra-vitrina',
    name: 'extra-vitrina',
    title: 'Vitrina · Catálogo denso',
    category: 'Extra (recomendados)',
    badge: 'Rústico · grilla densa',
    desc: 'Barra de filtros rápidos y una grilla de tarjetas chicas de 4 a 5 columnas para ver muchas propiedades de un vistazo.',
    img: '/inmobiliaria-g/images/front-door-house.jpg',
    route: '/skills/extra-vitrina',
    traits: ['Grilla densa', 'Filtros rápidos', 'Terracota #B5482F', 'Muchas fichas'],
  },
  {
    id: 'minimalist-skill',
    name: 'minimalist-skill',
    title: 'Minimalista editorial',
    category: 'Editoriales & Minimalistas',
    badge: 'Hueso cálido · serif',
    desc: 'Fondo hueso cálido, tipografía serif de alta jerarquía, cuadrícula bento plana de 1px y acentos pastel muy suaves. Sin sombras duras.',
    img: '/inmobiliaria-g/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg',
    route: '/skills/minimalist-skill',
    traits: ['Fondo hueso', 'Serif editorial', 'Bento 1px', 'Pasteles suaves'],
  },
  {
    id: 'soft-skill',
    name: 'soft-skill',
    title: 'Alta gama tipo agencia',
    category: 'Alta Gama & Agency',
    badge: 'Tarjetas con doble marco',
    desc: 'Tarjetas con contenedor doble (marco dentro de marco), navbar tipo isla flotante y ritmo espacial generoso. Estética de estudio premium.',
    img: '/inmobiliaria-g/images/arquitectura-moderna-apartamentos_1268-14696.avif',
    route: '/skills/soft-skill',
    traits: ['Doble marco', 'Nav flotante', 'Mucho espacio', 'Estética premium'],
  },
  {
    id: 'stitch-skill',
    name: 'stitch-skill',
    title: 'Neutros con acento',
    category: 'Alta Gama & Agency',
    badge: 'Grises neutros · hero dividido',
    desc: 'Base de grises neutros con un único acento de alto contraste, tipografía ajustada y hero asimétrico dividido con buscador.',
    img: '/inmobiliaria-g/images/front-door-house.jpg',
    route: '/skills/stitch-skill',
    traits: ['Grises neutros', 'Hero dividido', 'Buscador', 'Un solo acento'],
  },
  {
    id: 'gpt-tasteskill',
    name: 'gpt-tasteskill',
    title: 'Bento cinematográfico',
    category: 'Alta Gama & Agency',
    badge: 'Hero ancho · bento compacto',
    desc: 'Hero ancho de dos líneas con micro-foto dentro del título y una grilla bento sin espacios muertos. Secciones amplias y aireadas.',
    img: '/inmobiliaria-g/images/beautiful-shot-white-building-hamilton-gardens-new-zealand-blue-sky.jpg',
    route: '/skills/gpt-tasteskill',
    traits: ['Hero ancho', 'Bento compacto', 'Foto en el título', 'Secciones amplias'],
  },
  {
    id: 'taste-skill',
    name: 'taste-skill',
    title: 'Neo-editorial asimétrico',
    category: 'Editoriales & Minimalistas',
    badge: 'Filas alternadas · carácter',
    desc: 'Composición no plantillera con flujo alternado asimétrico, tipografía con carácter y foco en la calidad de las fichas.',
    img: '/inmobiliaria-g/images/Edificio-en-Libertad-171-Tucuman-11-730x1024.jpg',
    route: '/skills/taste-skill',
    traits: ['Flujo alternado', 'Tipografía fuerte', 'Fichas curadas', 'Asimetría'],
  },
  {
    id: 'brandkit',
    name: 'brandkit',
    title: 'Manual de marca',
    category: 'Industriales & Técnicos',
    badge: 'Paneles tipo deck de marca',
    desc: 'Presentación en paneles tipo manual de identidad: taxonomía de color, monograma, pilares de la marca y el portafolio como aplicación.',
    img: '/inmobiliaria-g/images/DSC_0453-Editar-Editar.webp',
    route: '/skills/brandkit',
    traits: ['Paneles de marca', 'Chips de color', 'Monograma', 'Pilares'],
  },
  {
    id: 'redesign-skill',
    name: 'redesign-skill',
    title: 'Rediseño zig-zag',
    category: 'Alta Gama & Agency',
    badge: '2 columnas · ritmo alternado',
    desc: 'Sustituye la típica fila de tres tarjetas iguales por un layout zig-zag de dos columnas con ritmo visual equilibrado y acentos ámbar.',
    img: '/inmobiliaria-g/images/house-isolated-field.jpg',
    route: '/skills/redesign-skill',
    traits: ['Zig-zag 2 col', 'Ritmo alternado', 'Ámbar sobrio', 'Fichas grandes'],
  },
  {
    id: 'imagegen-frontend-mobile',
    name: 'imagegen-frontend-mobile',
    title: 'App móvil (demo)',
    category: 'Mobile & Media',
    badge: 'Maqueta de teléfono interactiva',
    desc: 'Simulador dentro de un teléfono: buscador, feed de propiedades, favoritos, pestañas inferiores y una vista de mapa real.',
    img: '/inmobiliaria-g/images/102974-el-ipv-sorteara-466-departamentos-en-capital-y-se-podra-ver-en-vivo.webp',
    route: '/skills/imagegen-frontend-mobile',
    traits: ['Maqueta de teléfono', 'Feed de propiedades', 'Favoritos', 'Mapa dentro'],
  },
  {
    id: 'imagegen-frontend-web',
    name: 'imagegen-frontend-web',
    title: 'Narrativa por capítulos',
    category: 'Mobile & Media',
    badge: 'Secciones a pantalla completa',
    desc: 'La página avanza como una historia por capítulos, con heros de distinta escala y fotografía a pantalla completa, y un catálogo al final.',
    img: '/inmobiliaria-g/images/vacation-mykonos-travel-tourism-village.jpg',
    route: '/skills/imagegen-frontend-web',
    traits: ['Capítulos', 'Fotos a pantalla completa', 'Escalas variadas', 'Catálogo final'],
  },
  {
    id: 'image-to-code-skill',
    name: 'image-to-code-skill',
    title: 'Ficha protagonista + catálogo',
    category: 'Industriales & Técnicos',
    badge: 'Foto grande · grilla filtrable',
    desc: 'Una propiedad activa se muestra en grande con su ficha, y debajo el catálogo completo en grilla filtrable por tipo. Estilo editorial oscuro-suave.',
    img: '/inmobiliaria-g/images/disenos.departamentos.software.1.jpg',
    route: '/skills/image-to-code-skill',
    traits: ['Propiedad en grande', 'Grilla filtrable', 'Editorial', 'Selección activa'],
  },
  {
    id: 'taste-skill-v1',
    name: 'taste-skill-v1',
    title: 'Editorial crudo de alto impacto',
    category: 'Editoriales & Minimalistas',
    badge: 'Titulares grandes · alto contraste',
    desc: 'Titulares enormes, alto contraste y tarjetas con sombras sólidas. Estética cruda y directa.',
    img: '/inmobiliaria-g/images/post-image-6c7e19a2-b479-46a7-ae67-74cc78d87422-0-1778780777807.jpg',
    route: '/skills/taste-skill-v1',
    traits: ['Titulares enormes', 'Alto contraste', 'Sombras sólidas', 'Directo'],
  },
  {
    id: 'output-skill',
    name: 'output-skill',
    title: 'Tabla comparativa completa',
    category: 'Industriales & Técnicos',
    badge: 'Todo el catálogo en una tabla',
    desc: 'Todas las propiedades en una tabla comparativa con metros, ambientes, cochera, operación y valor. Al hacer clic en una fila se abre su ficha ampliada.',
    img: '/inmobiliaria-g/images/house-key-calculator-with-dollar-bills.jpg',
    route: '/skills/output-skill',
    traits: ['Tabla completa', 'Números tabulares', 'Ficha por fila', 'Comparar'],
  },
];

export function SkillsHub() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = [
    'Todos',
    'Extra (recomendados)',
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
            <span>Volver al inicio</span>
          </Link>
          <div className="hub-pill-tag">
            <Sparkles size={14} className="sparkle-amber" />
            <span>{SKILL_MODELS_DATA.length} modelos de diseño</span>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hub-hero">
        <div className="hub-container">
          <span className="hub-kicker">MODELOS DE DISEÑO</span>
          <h1 className="hub-title">
            Elegí el diseño de página para tu inmobiliaria.
          </h1>
          <p className="hub-subtitle">
            Todos los modelos comparten el mismo catálogo de propiedades de Corrientes y alrededores,
            el mismo mapa y el mismo sistema de filtros. Cada uno propone una estética y un layout
            distintos. Empezá por los <strong>Extra</strong>, que combinan lo mejor de los demás.
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
            <p>Corrientes, Argentina · Casas, departamentos y lotes</p>
          </div>
          <div className="hub-footer-links">
            <Link to="/" className="btn-secondary-link">Ir al inicio</Link>
            <a href="https://wa.me/5493794675203" target="_blank" rel="noreferrer" className="btn-contact-link">
              Contacto WhatsApp: 3794675203
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
