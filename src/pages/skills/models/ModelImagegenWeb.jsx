import React from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { FadeGallery } from '../../../components/FadeGallery';
import { SkillMapSection } from '../../../components/SkillMapSection';
import { VerFichaLink } from '../../../components/VerFichaLink';
import { Compass, ArrowRight, MapPin, Eye, CheckCircle, PhoneCall, Sparkles } from 'lucide-react';
import './ModelImagegenWeb.css';

export function ModelImagegenWeb() {
  const p1 = mockProperties[0];
  const p2 = mockProperties[1];
  const p3 = mockProperties[2];
  const p4 = mockProperties[3];

  return (
    <div className="web-narrative-page">
      <SkillFloatingBar 
        skillName="imagegen-frontend-web" 
        skillTitle="Section-by-Section Narrative Web" 
        archetype="Horizontal Visual Chapters • Cinematic Photography" 
      />

      {/* CHAPTER 1: GRAND PANORAMIC HORIZON HERO */}
      <section className="narrative-chapter chapter-hero" style={{ backgroundImage: `url(${p1.images[0]})` }}>
        <div className="chapter-overlay"></div>
        <div className="narrative-container">
          <div className="chapter-badge">CAPÍTULO I • EL HORIZONTE LITORAL</div>
          <h1 className="chapter-h1">Habitar el Río, Proyectar el Futuro.</h1>
          <p className="chapter-lead">
            Una travesía visual por los desarrollos residenciales y parcelas más selectas de Corrientes, Paso de la Patria y Santa Ana.
          </p>
          <div className="chapter-cta-bar">
            <a href="#capitulo-2" className="btn-narrative-solid">
              Comenzar Recorrido <ArrowRight size={16} />
            </a>
            <span className="chapter-scroll-hint">Recorré el catálogo completo</span>
          </div>
        </div>
      </section>

      {/* CHAPTER 2: ARCHITECTURAL SPOTLIGHT */}
      <section id="capitulo-2" className="narrative-chapter chapter-spotlight">
        <div className="narrative-container split-narrative">
          <div className="narrative-media-col">
            <div className="panoramic-frame">
              <FadeGallery images={p2.images} alt={p2.title} height="420px" />
              <div className="frame-tag">RESIDENCIA DE AUTOR // CORRIENTES</div>
            </div>
          </div>
          <div className="narrative-text-col">
            <div className="chapter-badge dark-badge">CAPÍTULO II • PROPORCIÓN &amp; LUZ</div>
            <h2 className="chapter-h2">{p2.title}</h2>
            <p className="chapter-loc"><MapPin size={15} /> {p2.location}</p>
            <p className="chapter-body">{p2.description}</p>
            
            <div className="chapter-specs-grid">
              <div><strong>{p2.area} m²</strong><span>Superficie</span></div>
              <div><strong>{p2.bedrooms || 3}</strong><span>Dormitorios</span></div>
              <div><strong>{p2.bathrooms || 2}</strong><span>Baños</span></div>
            </div>

            <div className="chapter-price-row">
              <span className="chapter-val">{p2.priceLabel}</span>
              <VerFichaLink id={p2.id} />
              <a
                href={`https://wa.me/${p2.whatsapp}?text=Consulta%20Capitulo%202:%20${encodeURIComponent(p2.title)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-narrative-dark"
              >
                Solicitar Visita Guiada
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 3: RIBEREÑO & NATURAL RETREAT */}
      <section className="narrative-chapter chapter-retreat" style={{ backgroundImage: `url(${p3.images[0]})` }}>
        <div className="chapter-overlay-deep"></div>
        <div className="narrative-container">
          <div className="chapter-badge">CAPÍTULO III • REFUGIO &amp; TRANQUILIDAD</div>
          <h2 className="chapter-h2 text-white">{p3.title}</h2>
          <p className="chapter-lead text-light">
            Propiedades pensadas para el descanso o la renta turística premium cerca de la costa del Paraná.
          </p>

          <div className="retreat-specs-card">
            <div><span>LOCALIDAD</span><strong>{p3.city}</strong></div>
            <div><span>VALOR</span><strong className="text-gold">{p3.priceLabel}</strong></div>
            <div><span>ESTADO</span><strong>Listo para Escriturar</strong></div>
            <VerFichaLink id={p3.id} />
            <a
              href={`https://wa.me/${p3.whatsapp}?text=Consulta%20propiedad%20ribereña:%20${encodeURIComponent(p3.title)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-narrative-gold"
            >
              Consultar Ficha Técnica
            </a>
          </div>
        </div>
      </section>

      {/* CHAPTER 4: PATRIMONIO & INVERSIÓN */}
      <section className="narrative-chapter chapter-investment">
        <div className="narrative-container split-narrative reversed">
          <div className="narrative-text-col">
            <div className="chapter-badge dark-badge">CAPÍTULO IV • VALOR PATRIMONIAL</div>
            <h2 className="chapter-h2">Oportunidades de Suelo y Departamento</h2>
            <p className="chapter-body">
              Análisis financiero, rentabilidad proyectada en alquileres temporarios y tradicionales, y tasaciones fundamentadas.
            </p>
            <div className="trust-bullets">
              <div><CheckCircle size={16} /> Tasación profesional matriculada</div>
              <div><CheckCircle size={16} /> Informes de dominio en 24 horas</div>
              <div><CheckCircle size={16} /> Asesoramiento en loteos y desarrollos</div>
            </div>
            <a 
              href="https://wa.me/5493794675203" 
              target="_blank" 
              rel="noreferrer"
              className="btn-narrative-dark"
            >
              Conversar con Luciano Jensen
            </a>
          </div>
          <div className="narrative-media-col">
            <div className="panoramic-frame">
              <FadeGallery images={p4.images} alt={p4.title} height="420px" />
              <div className="frame-tag">SUELO &amp; DESARROLLOS // {p4.city.toUpperCase()}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 5: CATÁLOGO COMPLETO */}
      <section className="narrative-chapter chapter-catalog">
        <div className="narrative-container">
          <div className="chapter-badge dark-badge">CAPÍTULO V • CATÁLOGO</div>
          <h2 className="chapter-h2">Todas las propiedades disponibles</h2>
          <p className="chapter-body">
            {mockProperties.length} inmuebles en Corrientes capital, el Litoral y Chaco. Casas,
            departamentos y lotes en venta y alquiler.
          </p>
          <div className="narrative-catalog-grid">
            {mockProperties.map((prop) => (
              <article key={prop.id} className="narrative-cat-card">
                <FadeGallery images={prop.images} alt={prop.title} height="220px" />
                <div className="narrative-cat-body">
                  <span className="narrative-cat-op">{prop.operation} · {prop.type}</span>
                  <h3>{prop.title}</h3>
                  <p className="narrative-cat-loc"><MapPin size={13} /> {prop.location}</p>
                  <div className="narrative-cat-foot">
                    <strong>{prop.priceLabel}</strong>
                    <VerFichaLink id={prop.id} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 6: EL MAPA DEL RECORRIDO */}
      <SkillMapSection
        properties={mockProperties}
        variant="dark"
        accent="#c8a15a"
        tone="dark"
        label="Capítulo VI · Cartografía"
        title="Todo el catálogo, en un mapa"
        note="Cada propiedad ubicada en el territorio de Corrientes, el Litoral y Chaco."
      />

      {/* CHAPTER 7: FOOTER EPILOGUE */}
      <footer className="narrative-chapter chapter-epilogue">
        <div className="narrative-container epilogue-content">
          <h3>Inmobiliaria G • Luciano Gonzalez Jensen</h3>
          <p>Corrientes, Argentina • Teléfono directo: 3794675203</p>
          <div className="skill-signature-box">
            <span>Contacto directo</span>
            <small>WhatsApp 3794675203 &middot; Corrientes, Argentina</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
