import Leaflet from 'leaflet'
import './App.css';
import React, { useState } from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import SimpleExample from './components/SimpleLeaflet'

function App() {

  const [lat, setLat] = useState(35.6283912617216);
  const [lng, setLng] = useState(139.74017085381067);
  const [zoom, setZoom] = useState(15);
  const [position, setPosition] = useState({
    lat: 35.6283912617216 ,
    lng: 139.74017085381067,
  })

  return (
    <MapContainer center={position} zoom={zoom} style={{ height: "50vh" }} >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SimpleExample />
    </MapContainer>
  );
}

export default App;
