import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Image as ImageIcon } from 'lucide-react';
import { mockProperties } from '../data/mockProperties';
import './AdminDashboard.css';

export function AdminDashboard() {
  const [properties, setProperties] = useState(mockProperties);
  const [isAdding, setIsAdding] = useState(false);

  // Form state mock
  const [formData, setFormData] = useState({
    title: '', type: 'Casa', price: '', location: '', description: ''
  });

  const handleDelete = (id) => {
    if(window.confirm('¿Estás seguro de eliminar esta propiedad?')) {
      setProperties(properties.filter(p => p.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProp = {
      id: Date.now(),
      ...formData,
      price: Number(formData.price),
      currency: 'USD',
      coordinates: [-34.6, -58.4], // Mock coords
      bedrooms: 0,
      bathrooms: 0,
      area: 0,
      amenities: [],
      images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
      whatsapp: "5491112345678"
    };
    setProperties([newProp, ...properties]);
    setIsAdding(false);
  };

  return (
    <div className="admin-page container">
      <div className="admin-header flex justify-between items-center">
        <h1>Panel de Administración</h1>
        <button 
          className="btn btn-primary"
          onClick={() => setIsAdding(!isAdding)}
        >
          <Plus size={20} /> {isAdding ? 'Cancelar' : 'Nueva Propiedad'}
        </button>
      </div>

      {isAdding && (
        <div className="admin-form-container glass">
          <h2>Agregar Nueva Propiedad</h2>
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Título</label>
                <input 
                  type="text" 
                  required 
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Tipo</label>
                <select 
                  value={formData.type}
                  onChange={e => setFormData({...formData, type: e.target.value})}
                >
                  <option value="Casa">Casa</option>
                  <option value="Departamento">Departamento</option>
                  <option value="Terreno">Terreno</option>
                </select>
              </div>
              <div className="form-group">
                <label>Precio (USD)</label>
                <input 
                  type="number" 
                  required 
                  value={formData.price}
                  onChange={e => setFormData({...formData, price: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Ubicación</label>
                <input 
                  type="text" 
                  required 
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Descripción</label>
              <textarea 
                rows="4" 
                required
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>
            
            <div className="form-group upload-area flex-col items-center justify-center text-muted">
              <ImageIcon size={40} />
              <p>Arrastra fotos y videos aquí, o haz clic para seleccionar</p>
              <small>(Mock de subida de archivos)</small>
            </div>

            <button type="submit" className="btn btn-accent w-100">Guardar Propiedad</button>
          </form>
        </div>
      )}

      <div className="properties-list glass">
        <h2>Tus Publicaciones</h2>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Tipo</th>
                <th>Precio</th>
                <th>Ubicación</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {properties.map(prop => (
                <tr key={prop.id}>
                  <td>
                    <div className="flex items-center gap-4">
                      <img src={prop.images[0]} alt={prop.title} className="admin-thumb" />
                      <span className="font-medium">{prop.title}</span>
                    </div>
                  </td>
                  <td>{prop.type}</td>
                  <td>{prop.currency} {prop.price.toLocaleString()}</td>
                  <td>{prop.location}</td>
                  <td>
                    <div className="flex gap-2">
                      <button className="action-btn edit" title="Editar"><Edit2 size={18} /></button>
                      <button className="action-btn delete" title="Eliminar" onClick={() => handleDelete(prop.id)}><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
