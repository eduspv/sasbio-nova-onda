import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import { defaultIcon, redIcon } from "@/lib/leafletIcon";

type Mode = "localizacoes" | "representantes";

const locations = [
  {
    name: "SASBIO – Brasília (DF)",
    position: [-15.7894, -47.8825] as [number, number],
    address: "SCN Quadra 1, Bl. F, Salas 315 e 316, Ed. America Office Tower",
  },
  {
    name: "SASBIO – Rio de Janeiro (RJ)",
    position: [-22.9035, -43.2096] as [number, number],
    address: "R. Acre, 83 - Centro, Rio de Janeiro - RJ, 20081-000",
  },
];

const capitals = [
  { name: "Rio Branco – AC", position: [-9.9754, -67.8249] as [number, number] },
  { name: "Maceió – AL", position: [-9.6658, -35.735] as [number, number] },
  { name: "Macapá – AP", position: [0.0356, -51.0705] as [number, number] },
  { name: "Manaus – AM", position: [-3.119, -60.0217] as [number, number] },
  { name: "Salvador – BA", position: [-12.9714, -38.5014] as [number, number] },
  { name: "Fortaleza – CE", position: [-3.7319, -38.5267] as [number, number] },
  { name: "Brasília – DF", position: [-15.7801, -47.9292] as [number, number] },
  { name: "Vitória – ES", position: [-20.3155, -40.3128] as [number, number] },
  { name: "Goiânia – GO", position: [-16.6869, -49.2648] as [number, number] },
  { name: "São Luís – MA", position: [-2.5391, -44.2829] as [number, number] },
  { name: "Cuiabá – MT", position: [-15.5989, -56.0949] as [number, number] },
  { name: "Campo Grande – MS", position: [-20.4697, -54.6201] as [number, number] },
  { name: "Belo Horizonte – MG", position: [-19.9167, -43.9345] as [number, number] },
  { name: "Belém – PA", position: [-1.4558, -48.4902] as [number, number] },
  { name: "João Pessoa – PB", position: [-7.1195, -34.845] as [number, number] },
  { name: "Curitiba – PR", position: [-25.4297, -49.2711] as [number, number] },
  { name: "Recife – PE", position: [-8.0539, -34.8811] as [number, number] },
  { name: "Teresina – PI", position: [-5.0892, -42.8019] as [number, number] },
  { name: "Rio de Janeiro – RJ", position: [-22.9068, -43.1729] as [number, number] },
  { name: "Natal – RN", position: [-5.7945, -35.211] as [number, number] },
  { name: "Porto Alegre – RS", position: [-30.0346, -51.2177] as [number, number] },
  { name: "Porto Velho – RO", position: [-8.7612, -63.9004] as [number, number] },
  { name: "Boa Vista – RR", position: [2.8235, -60.6758] as [number, number] },
  { name: "Florianópolis – SC", position: [-27.5954, -48.548] as [number, number] },
  { name: "São Paulo – SP", position: [-23.5505, -46.6333] as [number, number] },
  { name: "Aracaju – SE", position: [-10.9472, -37.0731] as [number, number] },
  { name: "Palmas – TO", position: [-10.2491, -48.3243] as [number, number] },
];

function MapViewController({ mode }: { mode: Mode }) {
  const map = useMap();
  useEffect(() => {
    if (mode === "representantes") {
      map.setView([-15, -53], 4);
    } else {
      map.setView([-18, -47], 5);
    }
  }, [mode, map]);
  return null;
}

type Props = {
  mode: Mode;
};

export function LocationsLeaflet({ mode }: Props) {
  return (
    <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl">
      <MapContainer
        center={[-18, -47]}
        zoom={5}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution="© SASBIO locais"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapViewController mode={mode} />

        {mode === "localizacoes" &&
          locations.map((loc) => (
            <Marker key={loc.name} position={loc.position} icon={defaultIcon}>
              <Popup>
                <strong>{loc.name}</strong>
                <br />
                {loc.address}
              </Popup>
            </Marker>
          ))}

        {mode === "representantes" &&
          capitals.map((cap) => (
            <Marker key={cap.name} position={cap.position} icon={redIcon}>
              <Popup>{cap.name}</Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}
