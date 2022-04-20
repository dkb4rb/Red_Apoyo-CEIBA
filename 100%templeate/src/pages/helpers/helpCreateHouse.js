import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookie from "universal-cookie"

/*
 * CrearHouse - This function Create new uHouse into data to user Id create 
 * Return 
 * @return: New House
 * 
 **/
function CreateHouse(data, setErr, setForm, location) {
  
  const DbUrl = "https://isnft-prod.azurewebsites.net/api/houses";
  const cookie = new Cookie();
  let idowner = cookie.get("id_usr_tok");
  const date_now = new Date() 
  const mes = date_now.toLocaleDateString().split("/")[0];
  const dia = date_now.toLocaleDateString().split("/")[1];
  const año = date_now.toLocaleDateString().split("/")[2];

  

  const heade = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${idowner}`
  }
  const state = {
    datos: {
      "cityId": Number(data.cities),
      "countyId": Number(data.country),
      "description": `${data.name_pub}-${data.rooms}-${data.Bathrooms}-${data.price}`,
      "direction": data.direction,
      "finishAvailabilityDate":  `${dia}-${Number(mes) + 2}-${año}` ,
      "latitude": location.latitude,
      "longitude": location.longitude,
      "startAvailabilityDate": `${dia}-${mes}-${año}`,
    

    },
    formphot: {
      "id": "id_photo",
      "url": "parse_text[2]"
    }
  };



  axios
    .post(DbUrl, state.datos
      , {
        headers: heade
      }
    )
    .then(response => {
     console.log(response.data);
     window.location.href = `/Products/${response.data.id}`
   })
    .catch(error => {
      console.log(error);
    })
};
export default CreateHouse;