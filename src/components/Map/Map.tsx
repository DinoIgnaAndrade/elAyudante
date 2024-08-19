// components/Map/Map.tsx
import { FC } from 'react';
import dynamic from 'next/dynamic';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importar MapContainer y otros componentes de react-leaflet de manera dinámica
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then(mod => mod.CircleMarker), { ssr: false });

const center: LatLngExpression = [-34.76049974727826, -58.39754220836072];
const zoom = 10;

const Map: FC = () => {
  const aquaOptions = { color: 'aqua' };
  const greenOptions = { color: 'white' };

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      style={{ height: '500px', width: '100%' }}
      scrollWheelZoom={false}   // Desactivar el zoom con la rueda del ratón
      dragging={false}          // Desactivar el arrastre del mapa
      doubleClickZoom={false}   // Desactivar el zoom al hacer doble clic
      zoomControl={false}       // Ocultar los controles de zoom
      attributionControl={false} // Ocultar la atribución
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CircleMarker center={[-34.76049974727826, -58.39754220836072]} pathOptions={aquaOptions} radius={100} />
      <CircleMarker center={[-34.588219607092746, -58.44712914578318]} pathOptions={greenOptions} radius={70} />
    </MapContainer>
  );
};

export default Map;
