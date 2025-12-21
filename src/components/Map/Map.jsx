import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';

function Map({position, setPosition}) {

  function ClickHandler() {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]); // Update position on click
      }
    });
    return null;
  }

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={position}>
        <Popup>
          Your Location
        </Popup>
      </Marker>

      <ChangeView position={position}/>
      <ClickHandler />
    </MapContainer>
  );
};

// Auxiliar component to update the map view
function ChangeView({ position }) {
  const map = useMap(); // get the map instance
  map.setView(position);
  return null;
}

export default Map;
