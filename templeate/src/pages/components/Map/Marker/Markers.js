import React, { useEffect, useState } from "react";
import {IconLocation} from "./IconLocation"
import { Marker, Popup } from "react-leaflet";
import axios from "axios";

const Markers = () => {
  const position = [-33.386740, -70.624847];
  const [housesdb, sethousesdb] = useState({})

  useEffect(() =>{
    const housesurl = "https://isnft-prod.azurewebsites.net/api/houses" 
    axios
    .get(housesurl)
    .then((resp) =>{
      const respues = resp.data.result;
      sethousesdb(respues);
    })
    .catch((err) =>{
      console.log(err);
    })
  })
  
  return ( 
  <div>
   
  <Marker position={position} icon={IconLocation} >
  <Popup>
      Nuestra publicacion guardada en mapa. <br /> Test house.
      <br></br>
      
      <img className="img_map_available" alt="nueva imagen" src="https://news.airbnb.com/wp-content/uploads/sites/4/2020/05/Airbnb-Beachfront-Greece.jpg?fit=2662,1776"></img>
    </Popup>

  </Marker>
  </div>
  );
};

export default Markers;
