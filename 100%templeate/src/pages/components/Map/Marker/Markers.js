import React, { useEffect, useState } from "react";
import { IconLocation } from "./IconLocation"
import { FaBath } from "react-icons/fa"
import { MdMeetingRoom } from "react-icons/md"
import { Marker, Popup } from "react-leaflet";
import axios from "axios";

const Markers = ({ data }) => {
  const position = [data.latitude, data.longitude];
  const [housesdb, sethousesdb] = useState({})

  useEffect(() => {
    const housesurl = "https://isnft-prod.azurewebsites.net/api/houses"
    axios
      .get(housesurl)
      .then((resp) => {
        const respues = resp.data.result;
        sethousesdb(respues);
      })
      .catch((err) => {
        console.log(err);
      })
  })

  return (
    <div>
      <span style={{ display: "none" }} >{housesdb}</span>

      <Marker position={position} icon={IconLocation} >
        <Popup>
          {
            data.description.split("-")[0]
          } <br />
          <br></br>

          {
            data.photos.length === 0 ? <img className="img_map_available" alt="nueva imagen" src="https://news.airbnb.com/wp-content/uploads/sites/4/2020/05/Airbnb-Beachfront-Greece.jpg?fit=2662,1776"></img> : <img className="img_map_available" alt="nueva imagen" src={data.photos[0].url}></img>
          }



          <p>
            <FaBath></FaBath>
            {
              data.description.split("-")[1]
            }</p>

          <p>
            <MdMeetingRoom></MdMeetingRoom>
            {
              data.description.split("-")[2]
            }
          </p>
          <button type="button" className="btn btn-success" font onClick={() => window.location.href = `/Products/${data.id}`} > Ver </button>

        </Popup>



      </Marker>
    </div>
  );
};

export default Markers;
