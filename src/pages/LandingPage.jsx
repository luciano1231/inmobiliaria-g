import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, SlidersHorizontal, MessageCircle, Building2, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { mockProperties } from '../data/mockProperties';
import './LandingPage.css';

const MODELS = [
  {
    to: '/model-1',
    name: 'Modelo 1 — Clásico Premium',
    img: '/inmobiliaria-g/images/front-door-house.jpg',
    tag: 'Claro y directo',
    desc: 'Diseño claro, confiable y directo al punto. Hero con parallax y buscador de mapa a pantalla completa. Ideal para una navegación sencilla.',
    features: ['Fondo claro', 'Hero con parallax', 'Barra de navegación fija'],
  },
  {
    to: '/model-2',
    name: 'Modelo 2 — Oscuro Elegante',
    img: '/inmobiliaria-g/images/arquitectura-moderna-apartamentos_1268-14696.avif',
    tag: 'Exclusivo',
    desc: 'Estética oscura y elegante. Pensado para propiedades exclusivas y de alto valor, con títulos de sección y foco en las fotos.',
    features: ['Paleta oscura', 'Tipografía grande', 'Enfoque en imágenes'],
  },
  {
    to: '/model-3',
    name: 'Modelo 3 — Natural / Habitat',
    img: '/inmobiliaria-g/images/charming-yellow-house-with-wooden-windows-green-grassy-garden.jpg',
    tag: 'Cálido',
    desc: 'Estilo natural y orgánico, colores cálidos y verdes. Incluye sección "Nosotros", bloque de beneficios y navegación propia.',
    features: ['Hero dividido', 'Sección Nosotros', 'CTA de WhatsApp'],
  },
];

const FEATURES = [
  {
    icon: <MapPin size={22} />,
    title: 'Búsqueda por mapa',
    text: 'Todas las propiedades ubicadas sobre el mapa. Hacé clic en un marcador para ver el detalle.',
  },
  {
    icon: <SlidersHorizontal size={22} />,
    title: 'Filtros completos',
    text: 'Filtrá por venta o alquiler, provincia, ciudad, tipo, dormitorios, baños, cochera y precio.',
  },
  {
    icon: <Building2 size={22} />,
    title: 'Corrientes y alrededores',
    text: 'Publicaciones en Corrientes capital y localidades aledañas: Riachuelo, Paso de la Patria, San Cosme, Santa Ana, Empedrado y más.',
  },
  {
    icon: <MessageCircle size={22} />,
    title: 'Contacto directo',
    text: 'Botón de WhatsApp en cada propiedad para consultar y coordinar una visita al instante.',
  },
];

export function LandingPage() {
  const total = mockProperties.length;
  const enVenta = mockProperties.filter((p) => p.operation === 'Venta').length;
  const enAlquiler = mockProperties.filter((p) => p.operation === 'Alquiler').length;
  const ciudades = new Set(mockProperties.map((p) => p.city)).size;

  return (
    <div className="landing-page">
      <header className="landing-header">
        <span className="landing-kicker">Demo de sitios inmobiliarios</span>
        <h1>Modelos de páginas para inmobiliarias</h1>
        <p>
          Tres diseños distintos que comparten la misma base de propiedades, mapa
          interactivo y sistema de filtros. Elegí el que mejor se adapte a tu marca.
        </p>

        {/* NUEVO BOTÓN DESTACADO PARA MODELOS POR SKILLS */}
        <div className="landing-header-actions">
          <Link to="/skills" className="btn-skills-lab">
            <Sparkles size={18} className="sparkle-icon-pulse" />
            <span>Ver más modelos de diseño</span>
            <span className="skills-badge-count">17 diseños</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="landing-stats">
          <div><strong>{total}</strong><span>propiedades</span></div>
          <div><strong>{enVenta}</strong><span>en venta</span></div>
          <div><strong>{enAlquiler}</strong><span>en alquiler</span></div>
          <div><strong>{ciudades}</strong><span>ciudades</span></div>
        </div>
      </header>

      <main className="landing-main container">
        <section className="landing-section">
          <h2 className="section-heading">Elegí un modelo</h2>
          <p className="section-sub">
            Cada modelo es una landing page completa y funcional. El contenido
            (propiedades, ubicaciones y filtros) es el mismo en los tres.
          </p>

          <div className="models-grid">
            {MODELS.map((m) => (
              <article className="model-card" key={m.to}>
                <div className="model-image">
                  <img src={m.img} alt={m.name} />
                  <span className="model-tag">{m.tag}</span>
                  <div className="model-overlay">
                    <Link to={m.to} className="btn btn-primary">
                      Ver {m.name.split('—')[0].trim()} <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
                <div className="model-info">
                  <h3>{m.name}</h3>
                  <p>{m.desc}</p>
                  <ul className="model-features">
                    {m.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Link to={m.to} className="model-link">
                    Abrir modelo <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECCIÓN: MÁS MODELOS DE DISEÑO */}
        <section className="landing-skills-banner-section">
          <div className="skills-lab-banner">
            <div className="skills-banner-content">
              <span className="skills-banner-tag">
                <Sparkles size={15} /> 17 modelos de diseño
              </span>
              <h2>¿Buscás otra estética? Probá los modelos alternativos</h2>
              <p>
                17 diseños de página completos que comparten el mismo catálogo, el mismo mapa y los
                mismos filtros. Editorial cálido, agencia premium, revista de arquitectura, catálogo
                denso, app móvil y más. Empezá por los 5 modelos <strong>Extra</strong>.
              </p>
              <div className="skills-banner-pills">
                <span>Aurora · editorial cálido</span>
                <span>Signature · agencia premium</span>
                <span>Galería · revista</span>
                <span>Panorama · el mapa primero</span>
                <span>Vitrina · catálogo denso</span>
                <span>Minimalista</span>
                <span>Alta gama</span>
                <span>Bento cinematográfico</span>
                <span>App móvil</span>
                <span>Narrativa por capítulos</span>
                <span>Tabla comparativa</span>
              </div>
              <Link to="/skills" className="btn-skills-open">
                <Layers size={18} />
                <span>Ver los 17 modelos</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="landing-section">
          <h2 className="section-heading">Qué incluyen todos los modelos</h2>
          <div className="features-grid">
            {FEATURES.map((f) => (
              <div className="feature-box" key={f.title}>
                <div className="feature-box-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="landing-footer-content">
          <h3>Luciano Gonzalez Jensen</h3>
          <p>Consultoría informática y las demás cosas que hago.</p>
          <div className="contact-info">
            <a
              href="https://wa.me/5493794675203"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Contactar por WhatsApp: 3794675203
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
