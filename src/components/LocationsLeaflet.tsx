import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { defaultIcon } from "@/lib/leafletIcon";

const locations = [
  {
    name: "SASBIO – Brasília (DF)",
    position: [-15.7894, -47.8825],
    address:
      "SCN Quadra 1, Bl. F, Salas 315 e 316, Ed. America Office Tower",
  },
  {
    name: "SASBIO – Rio de Janeiro (RJ)",
    position: [-22.9035, -43.2096],
    address:
      "R. Acre, 83 - Centro, Rio de Janeiro - RJ, 20081-000",
  },
  {
    name: "SASBIO – Lisboa (Portugal)",
    position: [38.7352, -9.1452],
    address:
      "Av. da República nº 48-B, 4º andar – Lisboa",
  },
];

export function LocationsLeaflet() {
  return (
    <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl">
      <MapContainer
        center={[12, -20]} // visão Brasil + Europa
        zoom={3}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        {/* OpenStreetMap – gratuito */}
        <TileLayer
          attribution="© SASBIO locais"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((loc) => (
          <Marker
            key={loc.name}
            position={loc.position as [number, number]}
            icon={defaultIcon}
          >
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
