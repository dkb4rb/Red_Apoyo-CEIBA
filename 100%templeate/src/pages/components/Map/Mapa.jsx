import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import Markers from "./Marker/Markers";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import Cookies from "universal-cookie";

const Mapa = () => {
  const cookies = new Cookies()
  const [dbcasas, setdbcasas] = useState([])
  const [location, setLocation] = useState({
    currentLocation: { "lat": "4.3576383", "lng": "-74.2952925" }
  })


  useEffect(() => {
    if (!cookies.get('id_usr_tok')) {
      window.location.href = "./menu";
    }
    axios
      .get("https://isnft-prod.azurewebsites.net/api/houses")
      .then((rep) => {
        setdbcasas(rep.data.result)
        setLocation({ currentLocation: { "lat": dbcasas[4].latitude, "lng": dbcasas[4].longitude } })
      })
  })


  return (
    <>

      <MapContainer center={location.currentLocation} zoom={6}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
          dbcasas.map((item, index) => (
            <div key={index}>
              <Markers data={item} />
            </div>
          ))
        }
      </MapContainer>
    </>

  );
};

export default Mapa;
