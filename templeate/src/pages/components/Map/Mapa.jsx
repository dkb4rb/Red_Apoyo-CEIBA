import React, { useState } from "react";
import { MapContainer, TileLayer, Popup } from 'react-leaflet';
import Markers from "./Marker/Markers";
import "leaflet/dist/leaflet.css";

const Mapa = () => {

    const [location, setLocation] = useState({
        currentLocation : {"lat": "-33.386740", "lng":"-70.624847"}
    })

  return (
    <MapContainer center={location.currentLocation} zoom={96}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     <Markers/>
    </MapContainer>
  );
};

export default Mapa;
