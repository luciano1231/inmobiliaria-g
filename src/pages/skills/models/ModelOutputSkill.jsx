import React, { useState } from 'react';
import { mockProperties } from '../../../data/mockProperties';
import { SkillFloatingBar } from '../SkillFloatingBar';
import { FadeGallery } from '../../../components/FadeGallery';
import { SkillMapSection } from '../../../components/SkillMapSection';
import { Table, CheckCircle2, ArrowUpRight, FileSpreadsheet, ShieldAlert, Sparkles } from 'lucide-react';
import './ModelOutputSkill.css';

export function ModelOutputSkill() {
  const [selectedId, setSelectedId] = useState(mockProperties[0].id);
  const selectedProp = mockProperties.find(p => p.id === selectedId) || mockProperties[0];

  return (
    <div className="output-skill-page">
      <SkillFloatingBar 
        skillName="output-skill" 
        skillTitle="Full-Output Exhaustive Matrix" 
        archetype="Unabridged Data Catalog • Zero Truncation" 
      />

      {/* HEADER */}
      <header className="output-header">
        <div className="output-container">
          <div className="unabridged-tag">
            <FileSpreadsheet size={13} />
            <span>FULL-OUTPUT PROTOCOL ACTIVE • ZERO OMISSIONS</span>
          </div>

          <h1 className="output-h1">
            Matriz Exhaustiva de Inmuebles en Corrientes y Alrededores.
          </h1>

          <p className="output-lead">
            Catálogo completo e íntegro sin filtros recortados ni texto omitido. Acceso directo a especificaciones métricas, operativas, geográficas y de tasación para cada unidad registrada.
          </p>
        </div>
      </header>

      {/* EXHAUSTIVE COMPARATIVE TABLE */}
      <main className="output-main">
        <div className="output-container">
          <div className="table-wrapper">
            <div className="table-topbar">
              <span>TABLA COMPARATIVA GLOBAL ({mockProperties.length} UNIDADES)</span>
              <span>REGISTRO SIN CORTES</span>
            </div>

            <div className="table-responsive">
              <table className="exhaustive-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Operación</th>
                    <th>Tipo</th>
                    <th>Ubicación</th>
                    <th>Metros</th>
                    <th>Dorm.</th>
                    <th>Baños</th>
                    <th>Cochera</th>
                    <th>Valor</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {mockProperties.map(p => (
                    <tr 
                      key={p.id} 
                      className={p.id === selectedId ? 'row-active' : ''}
                      onClick={() => setSelectedId(p.id)}
                    >
                      <td className="mono-cell">#{String(p.id).padStart(3, '0')}</td>
                      <td className="title-cell">{p.title}</td>
                      <td><span className={`op-pill ${p.operation.toLowerCase()}`}>{p.operation}</span></td>
                      <td>{p.type}</td>
                      <td>{p.location}</td>
                      <td className="mono-cell">{p.area} m²</td>
                      <td>{p.bedrooms || '-'}</td>
                      <td>{p.bathrooms || '-'}</td>
                      <td>{p.garage ? 'Sí' : 'No'}</td>
                      <td className="price-cell">{p.priceLabel}</td>
                      <td>
                        <a 
                          href={`https://wa.me/${p.whatsapp}?text=Consulta%20completa%20ID%20${p.id}`}
                          target="_blank"
                          rel="noreferrer"
                          className="table-btn-wa"
                        >
                          WA <ArrowUpRight size={12} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* DEEP SPECIFICATION REPORT FOR ACTIVE ROW */}
          <section className="deep-report-card">
            <div className="report-header">
              <h3>Ficha Técnica Desglosada: {selectedProp.title}</h3>
              <span className="report-id-badge">ID #{selectedProp.id} • {selectedProp.operation}</span>
            </div>

            <div className="report-body">
              <div className="report-media">
                <FadeGallery images={selectedProp.images} alt={selectedProp.title} height="260px" />
              </div>

              <div className="report-data">
                <div className="data-triad">
                  <div><span>VALOR</span><strong>{selectedProp.priceLabel}</strong></div>
                  <div><span>SUPERFICIE</span><strong>{selectedProp.area} m²</strong></div>
                  <div><span>UBICACIÓN</span><strong>{selectedProp.location}</strong></div>
                </div>

                <p className="report-desc">{selectedProp.description}</p>

                <div className="features-checklist">
                  <h4>Prestaciones &amp; Equipamiento Verificado:</h4>
                  <div className="feat-tags">
                    {selectedProp.amenities?.map((f, i) => (
                      <span key={i} className="feat-chip"><CheckCircle2 size={13} /> {f}</span>
                    ))}
                  </div>
                </div>

                <div className="report-actions">
                  <a 
                    href={`https://wa.me/${selectedProp.whatsapp}?text=Deseo%20el%20informe%20exhaustivo%20de%20la%20propiedad%20${selectedProp.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="report-dispatch-btn"
                  >
                    Solicitar Expediente Completo por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SkillMapSection
        properties={mockProperties}
        variant="mono"
        accent="#0f766e"
        tone="light"
        label="Registro geográfico completo"
        title="Las 32 unidades sobre el mapa, sin omisiones"
        note="Cada fila de la tabla tiene su marcador. Click en el punto para abrir la ficha completa."
      />

      <footer className="output-footer">
        <div className="output-container footer-bar">
          <div>
            <strong>INMOBILIARIA G • REGISTRO COMPLETO</strong>
            <p>Datos no truncados verificados en Corrientes Capital</p>
          </div>
          <div className="skill-footer-note">
            <span>Skill: output-skill</span>
            <small>Full Output Protocol • Exhaustive Data Delivery</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
