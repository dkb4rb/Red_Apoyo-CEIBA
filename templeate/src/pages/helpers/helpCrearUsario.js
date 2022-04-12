import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookie from "universal-cookie"

const DbUrl = "https://isnft-prod.azurewebsites.net/api/users";

const cookie = new Cookie();

function CrearUsario(data, setErr, setForm, location) {

  let idowner = cookie.get("id_usr_tok");
  const id_photo = `${idowner}.${Date.now()}`;
  const heade = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0Iiwicm9sIjpbeyJhdXRob3JpdHkiOiJob3N0In0seyJhdXRob3JpdHkiOiJ0cmF2ZWxlciJ9XSwibmFtZSI6ImRvZSIsImVtYWlsIjoiZG9lQGRvZS5jb20iLCJpYXQiOjE2NDk3MjEwNzEsImV4cCI6MTY0OTgwNzQ3MX0.uS-GEU1a0tMHA9vsJ1GfgFTRItDThtUTcdbAuL3rW6mYVNn3a9jx8CXrPhUCaf0L-MsnuuziKEAKtSy2JD06Dw`
  };
  const state = {
    datos: {
      "userName": data.useName,
      "email": data.email,
      "person": {
        "name": data.name,
        "lastName": data.lastName,
        "phone": Number(data.phone),
        "birthday": "2002-10-18",
        "city": {
          "id": Number(data.cities),
        },
      }
    },
    formphot: {
      "id": id_photo,
      "url": ""
    }
  };

  console.log(state.datos);


  // axios
  //   .post(DbUrl, state.datos
  //   , {
  //     headers:heade
  //}
  //)
  //.then(response => {
  // console.log(response.data);
  //})
  //.catch(error => {
  //  console.log(error);
  //})
  // let formdata = new FormData()
  // formdata.append("file", parse_text[2])
  // axios({
  // url: photoUrl,
  //method: "POST",
  //headers : heade,
  //data: formdata,
  //})
  //.then((res) =>{
  //console.log(res)
  //})
  //.catch((er) => console.log(er))
  //    const DbUrlPhotos =`https://isnft-prod.azurewebsites.net/api/houses/photo?id=${data.id}`
  //   axios
  axios
    .post(DbUrl, {
      "userName": data.useName,
      "email": data.email,
      "person": {
        "name": data.name,
        "lastName": data.lastName,
        "phone": Number(data.phone),
        "birthday": "2002-10-18",
        "city": {
          "id": Number(data.cities),
        },
      },
    },
      { headers: heade })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    })
}
export default CrearUsario;