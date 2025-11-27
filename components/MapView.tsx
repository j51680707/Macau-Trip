import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Changed from named import to default import
import { ITINERARY } from '../constants.ts';
import { ItineraryItem } from '../types.ts';

// Custom Marker Icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapViewProps {
  onMarkerClick: (item: ItineraryItem) => void;
}

const MapView: React.FC<MapViewProps> = ({ onMarkerClick }) => {
  // Center map on Macau
  const centerPosition: [number, number] = [22.158, 113.55];

  // Flatten all items for the map
  const allItems = ITINERARY.flatMap(day => 
    day.items.map(item => ({...item, dayTitle: day.title.split(':')[0]}))
  );

  return (
    <div className="h-full w-full absolute top-0 left-0 bg-gray-100 z-0 pb-20">
       <MapContainer 
        center={centerPosition} 
        zoom={12} 
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {allItems.map((item) => (
          <Marker 
            key={item.id} 
            position={[item.coordinates.lat, item.coordinates.lng]}
            icon={customIcon}
          >
            <Popup>
              <div 
                className="cursor-pointer text-center"
                onClick={() => onMarkerClick(item)}
              >
                <span className="text-xs font-bold text-primary block mb-1">{item.dayTitle}</span>
                <strong className="text-sm">{item.title}</strong>
                <br/>
                <span className="text-xs text-blue-500 mt-2 block">點擊查看詳情</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;