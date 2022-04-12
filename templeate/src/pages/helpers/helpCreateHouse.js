import React, { useEffect, useState} from "react";
import axios from "axios";
import Cookie from "universal-cookie"

const DbUrl="https://isnft-prod.azurewebsites.net/api/houses";

const cookie = new Cookie();

const CreateHouse = (data, setErr, setForm, location) => {

    let idowner = cookie.get("id_usr_tok");
    const id_photo = Date.now();
    const photoUrl=`${DbUrl}/photos?id=${id_photo}`;
    const parse_text = data.url.split("\\");


    const heade_photos = {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${idowner}`,
      'type': "image/png"
      
    }


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
          "finishAvailabilityDate": `9-08-1999`,
          "latitude": location.latitude,
          "longitude": location.longitude,
          "startAvailabilityDate": `9-08-1999`,
          "photos": [data.url]
        },
        formphot: {
          "id": id_photo,
          "url": parse_text[2]
        }
    };
  
  console.log(state.datos)

    
    axios
        .post(DbUrl, state.datos
          , {
              headers:heade
          }
          )
            .then(response => {
               console.log(response.data);
              })
            .catch(error => {
                console.log(error);
            })

      //let formdata = new FormData()
      
     // formdata.append("file", parse_text[2])
      //axios({
        //url: photoUrl,
        //method: "POST",
        //headers : heade,
        //data: formdata,
        
      //})
      //.then((res) =>{
       // console.log(res)
     // })
      //.catch((er) => console.log(er))

  /*let state = {
    datos: {
            "city": {
              "id": data.cityId,
              "name": "string"
            },
            "description": `${data.name_pub}-${data.rooms}-${data.Bathrooms}-${data.price}`,
            "direction": data.direction,
            "finishAvailabilityDate": "string",
            "id": 0,
            "latitude": 0,
            "longitude": 0,
            "ownerId": ownerId[0],
            "photos": [
              {
                "id": 0,
                "url": data.url
              }
            ],
            "startAvailabilityDate": "string"
          }
  };

    //console.log(data.id);
    const DbUrlPhotos =`https://isnft-prod.azurewebsites.net/api/houses/photo?id=${data.id}`
    axios
    .post(baseUrl, { email: this.state.form.email, password: this.state.form.password })
        .then(response => {
            var token = response.data;
            cookies.set('id_usr_tok', token.accessToken, {path: "/"});
            alert(`Bienvenido`);
            window.location.href="./menu";
        })
        .catch(error => {
            console.log(error);
        })
    
    /*    axios({
        method:'POST',
        url: DbUrlPhotos,
        data : state.datos
    }).then((resp) => {
        console.log(resp.data)
    })*/
}
export default CreateHouse;