import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
// add icons
import Leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// marker setting
let DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

const SimpleLeaflet = () => {
  const [markers, setMarkers] = useState([]);
  const map = useMapEvents({
    click(e) {
      const newMarker = e.latlng
      setMarkers([...markers, newMarker]);
    },
  })
  const [lat, setLat] = useState(35.6283912617216);
  const [lng, setLng] = useState(139.74017085381067);
  const [zoom, setZoom] = useState(15);
  const [position, setPosition] = useState({
    lat: 35.6283912617216 ,
    lng: 139.74017085381067,
  })

  return (
    <div>
      {markers.map(marker => 
        <Marker position={marker} draggable="true" autoPan="true" eventHandlers={{
          click: () => {
            console.log('marker clicked')
            console.log(marker)
            const newMarkers = markers.filter((v) => v.lat != marker.lat || v.lng != marker.lng);
            setMarkers([...newMarkers]);
          },
          dragstart: () => {
            console.log('marker drag start')
          },
          drag: () => {
            console.log('marker on drag')
          },
          dragend: () => {
            console.log('marker drag end')
          }
        }}>
        </Marker>
      )}
    </div>
  );
};

export default SimpleLeaflet;