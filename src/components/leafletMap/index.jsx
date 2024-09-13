import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";

const ChangeMapView = ({ coords }) => {
  const map = useMap();
  map.setView(coords, 13);
  return null;
};

export const LeafletMap = () => {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [userLocated, setUserLocated] = useState(false); 

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
          setUserLocated(true);
        },
        () => {
          console.log("Unable to retrieve location");
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {userLocated && <ChangeMapView coords={position} />}
      <Marker position={position}>
        <Popup>
          {userLocated
            ? "You are here."
            : "Default location. Unable to detect your exact position."}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
