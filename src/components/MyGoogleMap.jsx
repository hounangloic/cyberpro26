import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyGoogleMap = () => {
  return (
    <MapContainer
      center={[48.8566, 2.3522]} // Coordonnées de Paris
      zoom={13}
      style={{ width: "100%", height: "400px" }}
    >
      {/* Fond de carte OpenStreetMap */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Marqueur */}
      <Marker position={[48.8566, 2.3522]}>
        <Popup>Bienvenue à Paris !</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyGoogleMap;
