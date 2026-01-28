import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

// Fix default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Danger zone data (sample locations with incident reports)
const dangerZones = [
  {
    id: 1,
    name: "Downtown Park Area",
    lat: 28.7041,
    lng: 77.1025,
    severity: "high",
    incidents: 12,
    description: "Recent incidents reported in this area"
  },
  {
    id: 2,
    name: "Old Market District",
    lat: 28.7089,
    lng: 77.1010,
    severity: "high",
    incidents: 8,
    description: "Frequent after-hours incidents"
  },
  {
    id: 3,
    name: "Railway Station Area",
    lat: 28.6358,
    lng: 77.2197,
    severity: "medium",
    incidents: 5,
    description: "Moderate safety concerns"
  },
  {
    id: 4,
    name: "Residential Area - North",
    lat: 28.7580,
    lng: 77.0855,
    severity: "low",
    incidents: 2,
    description: "Low incident area"
  },
  {
    id: 5,
    name: "Commercial Hub",
    lat: 28.6692,
    lng: 77.1450,
    severity: "medium",
    incidents: 4,
    description: "Busy commercial zone"
  },
];

const getSeverityColor = (severity) => {
  switch (severity) {
    case 'high':
      return '#dc2626'; // red
    case 'medium':
      return '#f59e0b'; // amber
    case 'low':
      return '#10b981'; // green
    default:
      return '#6b7280'; // gray
  }
};

const getSeverityIcon = (severity) => {
  switch (severity) {
    case 'high':
      return '🔴';
    case 'medium':
      return '🟡';
    case 'low':
      return '🟢';
    default:
      return '⚪';
  }
};

export default function DangerZoneMap() {
  const defaultCenter = [28.7041, 77.1025]; // Delhi coordinates

  return (
    <div className="w-full">
      <div className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <h3 className="font-bold text-lg mb-3">Danger Zone Legend</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔴</span>
            <div>
              <div className="font-semibold text-red-600">High Risk</div>
              <div className="text-sm text-gray-600">Frequent incidents</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🟡</span>
            <div>
              <div className="font-semibold text-yellow-600">Medium Risk</div>
              <div className="text-sm text-gray-600">Occasional incidents</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🟢</span>
            <div>
              <div className="font-semibold text-green-600">Low Risk</div>
              <div className="text-sm text-gray-600">Minimal incidents</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: '500px' }}>
        <MapContainer
          center={defaultCenter}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {/* Render danger zones */}
          {dangerZones.map((zone) => (
            <div key={zone.id}>
              {/* Danger zone circle */}
              <Circle
                center={[zone.lat, zone.lng]}
                radius={zone.severity === 'high' ? 1000 : zone.severity === 'medium' ? 800 : 500}
                pathOptions={{
                  color: getSeverityColor(zone.severity),
                  weight: 2,
                  opacity: 0.6,
                  fillOpacity: 0.2,
                }}
              />

              {/* Marker for the center */}
              <Marker position={[zone.lat, zone.lng]}>
                <Popup>
                  <div className="p-2">
                    <div className="font-bold text-lg mb-1">{zone.name}</div>
                    <div className="text-sm mb-2">
                      <strong>Severity:</strong> {zone.severity.toUpperCase()}
                    </div>
                    <div className="text-sm mb-2">
                      <strong>Incidents:</strong> {zone.incidents} reported
                    </div>
                    <div className="text-sm text-gray-600">{zone.description}</div>
                  </div>
                </Popup>
              </Marker>
            </div>
          ))}
        </MapContainer>
      </div>

      {/* Zone Details Below Map */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {dangerZones.map((zone) => (
          <div
            key={zone.id}
            className="p-4 bg-white rounded-lg shadow-md border-l-4"
            style={{ borderLeftColor: getSeverityColor(zone.severity) }}
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-bold text-lg">{zone.name}</h4>
              <span className="text-2xl">{getSeverityIcon(zone.severity)}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{zone.description}</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="font-semibold">Severity:</span>
                <div className="uppercase text-xs font-bold" style={{ color: getSeverityColor(zone.severity) }}>
                  {zone.severity}
                </div>
              </div>
              <div>
                <span className="font-semibold">Incidents:</span>
                <div className="text-lg font-bold">{zone.incidents}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
