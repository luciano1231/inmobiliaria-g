import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, MapPin, BedDouble, Bath, Ruler, Car, Check } from 'lucide-react';
import { mockProperties, ALL_CITIES } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { FadeGallery } from '../../../components/FadeGallery';
import { SkillMapSection } from '../../../components/SkillMapSection';
import { SkillMap } from '../../../components/SkillMap';
import './ModelExtra.css';

/* ------------------------------------------------------------------ */
/*  Presets: 5 diseños "EXTRA" que combinan lo mejor de los demás.     */
/*  Todos en tonos claros.                                            */
/* ------------------------------------------------------------------ */
export const EXTRA_PRESETS = {
  aurora: {
    slug: 'extra-aurora',
    brand: 'Aurora Propiedades',
    name: 'Extra · Aurora',
    tagline: 'Editorial cálido con fotografía protagonista',
    accent: '#c2683d',
    accentSoft: '#f3e4d8',
    bg: '#faf7f2',
    surface: '#ffffff',
    text: '#2b2622',
    muted: '#7c7268',
    line: '#e7ddd0',
    radius: '18px',
    fontHead: "'Playfair Display', 'Georgia', serif",
    hero: 'centered',
    grid: 'bento',
    heroKicker: 'Casas, departamentos y lotes en Corrientes',
    heroTitle: 'Espacios con carácter para tu próxima etapa',
    heroText:
      'Una selección cuidada de propiedades en Corrientes capital y las localidades del Litoral, con fichas claras y fotos reales.',
  },
  signature: {
    slug: 'extra-signature',
    brand: 'Signature Estate',
    name: 'Extra · Signature',
    tagline: 'Agencia premium, layout dividido y aire',
    accent: '#1f4b8e',
    accentSoft: '#e2ebf7',
    bg: '#f5f7fa',
    surface: '#ffffff',
    text: '#1c2530',
    muted: '#697585',
    line: '#e3e8ef',
    radius: '20px',
    fontHead: "'Outfit', 'Segoe UI', sans-serif",
    hero: 'split',
    grid: 'cards',
    heroKicker: 'Asesoramiento inmobiliario en Corrientes',
    heroTitle: 'Propiedades seleccionadas, decisiones con respaldo',
    heroText:
      'Compra, venta y alquiler con verificación de dominio, tasación real y acompañamiento directo hasta la escritura.',
  },
  galeria: {
    slug: 'extra-galeria',
    brand: 'Galería Inmobiliaria',
    name: 'Extra · Galería',
    tagline: 'Revista de arquitectura: filas alternadas',
    accent: '#a9803f',
    accentSoft: '#f0e7d8',
    bg: '#ffffff',
    surface: '#faf9f7',
    text: '#232120',
    muted: '#77716b',
    line: '#e8e4dd',
    radius: '4px',
    fontHead: "'Playfair Display', 'Georgia', serif",
    hero: 'editorial',
    grid: 'rows',
    heroKicker: 'Edición Corrientes · 2026',
    heroTitle: 'La arquitectura del Litoral, propiedad por propiedad',
    heroText:
      'Cada inmueble presentado como una pieza: fotografía amplia, planos claros y datos verificados.',
  },
  panorama: {
    slug: 'extra-panorama',
    brand: 'Panorama Corrientes',
    name: 'Extra · Panorama',
    tagline: 'El mapa primero, el catálogo después',
    accent: '#2f7d5d',
    accentSoft: '#dcefe4',
    bg: '#f4f6f4',
    surface: '#ffffff',
    text: '#1f2a24',
    muted: '#6b7a72',
    line: '#dfe6e1',
    radius: '16px',
    fontHead: "'Outfit', 'Segoe UI', sans-serif",
    hero: 'mapfirst',
    grid: 'compact',
    heroKicker: 'Buscá por zona',
    heroTitle: 'Encontrá tu propiedad sobre el mapa',
    heroText:
      'Explorá Corrientes capital, Riachuelo, Paso de la Patria, San Cosme, Santa Ana y más. Tocá un punto para abrir la ficha.',
  },
  vitrina: {
    slug: 'extra-vitrina',
    brand: 'Vitrina Inmuebles',
    name: 'Extra · Vitrina',
    tagline: 'Catálogo denso con filtros rápidos',
    accent: '#b5482f',
    accentSoft: '#f4e1db',
    bg: '#f7f5f2',
    surface: '#ffffff',
    text: '#26211e',
    muted: '#7a726c',
    line: '#e7e1da',
    radius: '10px',
    fontHead: "'Outfit', 'Segoe UI', sans-serif",
    hero: 'bar',
    grid: 'dense',
    heroKicker: 'Todo el catálogo en una pantalla',
    heroTitle: 'Vitrina completa de propiedades',
    heroText:
      'Filtrá por operación, tipo y ciudad. Cada tarjeta abre la ficha completa con ubicación en el mapa.',
  },
};

function specList(p) {
  const items = [];
  if (p.bedrooms > 0) items.push({ icon: <BedDouble size={14} />, label: `${p.bedrooms} dorm.` });
  if (p.bathrooms > 0) items.push({ icon: <Bath size={14} />, label: `${p.bathrooms} baños` });
  if (p.area > 0) items.push({ icon: <Ruler size={14} />, label: `${p.area} m²` });
  if (p.garage) items.push({ icon: <Car size={14} />, label: 'Cochera' });
  return items;
}

function ExtraCard({ p, variant }) {
  const mediaHeight =
    variant === 'rows' ? '340px' : variant === 'dense' ? '170px' : variant === 'bento-lg' ? '360px' : '230px';
  return (
    <article className={`mx-card mx-card--${variant}`}>
      <div className="mx-card__media">
        <FadeGallery images={p.images} alt={p.title} height={mediaHeight} radius="0" />
        <span className="mx-card__op">{p.operation}</span>
      </div>
      <div className="mx-card__body">
        <span className="mx-card__type">{p.type} · {p.city}</span>
        <h3 className="mx-card__title">{p.title}</h3>
        <p className="mx-card__loc"><MapPin size={13} /> {p.neighborhood}, {p.city}</p>
        {variant === 'rows' && <p className="mx-card__desc">{p.description}</p>}
        <div className="mx-card__specs">
          {specList(p).map((s, i) => (
            <span key={i}>{s.icon} {s.label}</span>
          ))}
        </div>
        <div className="mx-card__foot">
          <strong className="mx-card__price">{p.priceLabel}</strong>
          <div className="mx-card__actions">
            <Link to={`/property/${p.id}`} className="mx-btn mx-btn--ghost">
              Ver ficha <ArrowRight size={14} />
            </Link>
            <a
              className="mx-btn mx-btn--solid"
              href={`https://wa.me/${p.whatsapp}?text=${encodeURIComponent(`Hola, consulta por: ${p.title}`)}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ModelExtra({ preset }) {
  const cfg = EXTRA_PRESETS[preset] || EXTRA_PRESETS.aurora;
  const [op, setOp] = useState('Todas');
  const [tipo, setTipo] = useState('Todos');
  const [ciudad, setCiudad] = useState('Todas');

  const list = useMemo(() => {
    return mockProperties.filter((p) => {
      if (op !== 'Todas' && p.operation !== op) return false;
      if (tipo !== 'Todos' && p.type !== tipo) return false;
      if (ciudad !== 'Todas' && p.city !== ciudad) return false;
      return true;
    });
  }, [op, tipo, ciudad]);

  const styleVars = {
    '--mx-accent': cfg.accent,
    '--mx-accent-soft': cfg.accentSoft,
    '--mx-bg': cfg.bg,
    '--mx-surface': cfg.surface,
    '--mx-text': cfg.text,
    '--mx-muted': cfg.muted,
    '--mx-line': cfg.line,
    '--mx-radius': cfg.radius,
    '--mx-font-head': cfg.fontHead,
  };

  const heroImg = mockProperties[3].images[0];

  return (
    <div className="mx-page" data-preset={preset} style={styleVars}>
      <SkillFloatingBar />

      <nav className="mx-nav">
        <div className="mx-nav__inner">
          <span className="mx-brand">{cfg.brand}</span>
          <div className="mx-chips">
            {['Todas', 'Venta', 'Alquiler'].map((o) => (
              <button
                key={o}
                className={`mx-chip ${op === o ? 'is-active' : ''}`}
                onClick={() => setOp(o)}
              >
                {o}
              </button>
            ))}
          </div>
          <a
            className="mx-btn mx-btn--solid mx-nav__cta"
            href="https://wa.me/5493794675203"
            target="_blank"
            rel="noreferrer"
          >
            Contacto <ArrowUpRight size={14} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      {cfg.hero === 'centered' && (
        <header className="mx-hero mx-hero--centered">
          <span className="mx-kicker">{cfg.heroKicker}</span>
          <h1 className="mx-h1">{cfg.heroTitle}</h1>
          <p className="mx-lead">{cfg.heroText}</p>
          <a href="#catalogo" className="mx-btn mx-btn--solid mx-btn--lg">Ver catálogo <ArrowRight size={16} /></a>
        </header>
      )}
      {cfg.hero === 'split' && (
        <header className="mx-hero mx-hero--split">
          <div className="mx-hero__text">
            <span className="mx-kicker">{cfg.heroKicker}</span>
            <h1 className="mx-h1">{cfg.heroTitle}</h1>
            <p className="mx-lead">{cfg.heroText}</p>
            <a href="#catalogo" className="mx-btn mx-btn--solid mx-btn--lg">Ver catálogo <ArrowRight size={16} /></a>
          </div>
          <div className="mx-hero__media">
            <FadeGallery images={mockProperties[45].images} alt="Propiedad destacada" height="440px" radius={cfg.radius} />
          </div>
        </header>
      )}
      {cfg.hero === 'editorial' && (
        <header className="mx-hero mx-hero--editorial">
          <span className="mx-hero__num">{String(mockProperties.length).padStart(2, '0')}</span>
          <div>
            <span className="mx-kicker">{cfg.heroKicker}</span>
            <h1 className="mx-h1">{cfg.heroTitle}</h1>
            <p className="mx-lead">{cfg.heroText}</p>
          </div>
        </header>
      )}
      {cfg.hero === 'bar' && (
        <header className="mx-hero mx-hero--bar">
          <span className="mx-kicker">{cfg.heroKicker}</span>
          <h1 className="mx-h1">{cfg.heroTitle}</h1>
          <p className="mx-lead">{cfg.heroText}</p>
        </header>
      )}
      {cfg.hero === 'mapfirst' && (
        <header className="mx-hero mx-hero--mapfirst">
          <div className="mx-hero__text">
            <span className="mx-kicker">{cfg.heroKicker}</span>
            <h1 className="mx-h1">{cfg.heroTitle}</h1>
            <p className="mx-lead">{cfg.heroText}</p>
          </div>
          <div className="mx-hero__map">
            <SkillMap properties={list} accent={cfg.accent} height="460px" />
          </div>
        </header>
      )}

      {/* FILTROS */}
      <section className="mx-filters" id="catalogo">
        <div className="mx-filters__inner">
          <div className="mx-filter-group">
            <label>Tipo</label>
            <div className="mx-chips">
              {['Todos', 'Casa', 'Departamento', 'Terreno'].map((t) => (
                <button key={t} className={`mx-chip ${tipo === t ? 'is-active' : ''}`} onClick={() => setTipo(t)}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="mx-filter-group">
            <label htmlFor={`mx-city-${preset}`}>Ciudad</label>
            <select id={`mx-city-${preset}`} value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
              <option value="Todas">Todas</option>
              {ALL_CITIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <span className="mx-count">{list.length} propiedades</span>
        </div>
      </section>

      {/* CATÁLOGO */}
      <main className="mx-catalog">
        {list.length === 0 ? (
          <p className="mx-empty">No hay propiedades con esos filtros.</p>
        ) : (
          <div className={`mx-grid mx-grid--${cfg.grid}`}>
            {list.map((p, i) => (
              <ExtraCard
                key={p.id}
                p={p}
                variant={
                  cfg.grid === 'bento'
                    ? i % 5 === 0
                      ? 'bento-lg'
                      : 'bento'
                    : cfg.grid === 'rows'
                    ? 'rows'
                    : cfg.grid === 'dense'
                    ? 'dense'
                    : 'cards'
                }
              />
            ))}
          </div>
        )}
      </main>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="mx-why">
        <div className="mx-why__inner">
          <h2>Cómo trabajamos</h2>
          <div className="mx-why__grid">
            {[
              ['Dominio verificado', 'Informe del Registro de la Propiedad Inmueble de Corrientes antes de publicar.'],
              ['Tasación real', 'Valores comparados con operaciones recientes de la zona, sin precios inflados.'],
              ['Trato directo', 'Hablás por WhatsApp con Luciano Jensen, sin formularios eternos.'],
            ].map(([t, d]) => (
              <div className="mx-why__item" key={t}>
                <span className="mx-why__ic"><Check size={16} /></span>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {cfg.hero !== 'mapfirst' && (
        <SkillMapSection
          properties={list}
          accent={cfg.accent}
          tone="cream"
          label="Ubicaciones"
          title="Dónde está cada propiedad"
          note="Cada marcador abre la ficha completa con todas las características."
        />
      )}

      <footer className="mx-footer">
        <div className="mx-footer__inner">
          <div>
            <strong>{cfg.brand}</strong>
            <p>{cfg.tagline}</p>
          </div>
          <div className="mx-footer__contact">
            <span>Luciano Gonzalez Jensen</span>
            <a href="https://wa.me/5493794675203" target="_blank" rel="noreferrer">
              WhatsApp 3794675203
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
