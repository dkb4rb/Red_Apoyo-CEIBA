import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookie from "universal-cookie"

const DbUrl = "https://isnft-prod.azurewebsites.net/api/houses/photos";

const cookie = new Cookie();
function CreatePhoto(data, setErr, setForm, location) {

  let idowner = cookie.get("id_usr_tok");
  const DbUrlPhotos = `https://isnft-prod.azurewebsites.net/api/houses/photo?id=${data.id}`
  const id_photo = Date.now();
  const photoUrl = `${DbUrl}/photos?id=${id_photo}`;
  const parse_text = data.url.split("\\");

  const heade_photos = {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${idowner}`,
    'type': "image/png"
  }


  let formdata = new FormData()

  formdata.append("file", parse_text[2])
  axios({
    url: photoUrl,
    method: "POST",
    headers: heade,
    data: formdata,

  })
    .then((res) => {
      console.log(res)
    })
    .catch((er) => console.log(er))
};
export default CreateHouse;