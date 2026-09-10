import React, { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './SkillMap.css';

const CAPITAL_CENTER = [-27.4692, -58.8306];

const TILES = {
  light: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  mono: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  blueprint: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
};

function pinIcon(accent) {
  return L.divIcon({
    className: 'skillmap-pin-wrap',
    html: `<span class="skillmap-pin" style="--pin:${accent}"></span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -12],
  });
}

function FitBounds({ points }) {
  const map = useMap();
  useEffect(() => {
    if (!points.length) {
      map.setView(CAPITAL_CENTER, 11);
      return;
    }
    if (points.length === 1) {
      map.setView(points[0], 14);
      return;
    }
    map.fitBounds(L.latLngBounds(points), { padding: [36, 36], maxZoom: 13 });
  }, [points, map]);
  return null;
}

/**
 * Mapa Leaflet reutilizable y temeable para los modelos de skills.
 * props:
 *  - properties: array (usa .coordinates [lat,lng], .images, .title, .priceLabel, .operation, .id)
 *  - variant: 'light' | 'dark' | 'mono' | 'blueprint'
 *  - accent: color de los marcadores (hex)
 *  - height: alto del mapa (default 420px)
 *  - className: para theming extra por modelo
 *  - zoomControl: boolean (default true)
 */
export function SkillMap({
  properties = [],
  variant = 'light',
  accent = '#2563eb',
  height = '420px',
  className = '',
  zoomControl = true,
}) {
  const pts = useMemo(
    () => properties.filter((p) => Array.isArray(p.coordinates)).map((p) => p.coordinates),
    [properties]
  );
  const icon = useMemo(() => pinIcon(accent), [accent]);

  return (
    <div
      className={`skillmap skillmap--${variant} ${className}`}
      style={{ height }}
    >
      <MapContainer
        center={CAPITAL_CENTER}
        zoom={11}
        zoomControl={zoomControl}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url={TILES[variant] || TILES.light}
          attribution='&copy; OpenStreetMap &copy; CARTO'
        />
        <FitBounds points={pts} />
        {properties.map((p) =>
          Array.isArray(p.coordinates) ? (
            <Marker key={p.id} position={p.coordinates} icon={icon}>
              <Popup className="skillmap-popup">
                <Link to={`/property/${p.id}`} className="skillmap-popup__inner">
                  <img src={p.images?.[0]} alt={p.title} />
                  <span className="skillmap-popup__op">{p.operation} · {p.city}</span>
                  <strong className="skillmap-popup__title">{p.title}</strong>
                  <span className="skillmap-popup__price">{p.priceLabel}</span>
                </Link>
              </Popup>
            </Marker>
          ) : null
        )}
      </MapContainer>
    </div>
  );
}
