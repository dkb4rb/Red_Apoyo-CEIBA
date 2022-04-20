import React, { useEffect, useState } from "react";

import { MdLocationCity, MdLocationPin, MdMeetingRoom } from "react-icons/md"
import { GiBathtub } from "react-icons/gi"

import "./Houses.css";


const new_pr = (renta) => {
  window.location.href = `/Products/${renta}`;
}


const Houses = ({ houses = [] }) => {

  const [db, setdb] = useState([])

  useEffect(() => {
    setdb(houses.result);
  })

  return (
    <div>
      <div className="Houses_Container">
        <div className="Houses">
          <div className="row">

            {db?.map((item, index) => (
              <div key={index} className="col">
                <div
                  onClick={() => new_pr(item.id)}
                  className="cardd"
                  style={{ cursor: "pointer", margin: "auto", marginTop: "10px" }}
                >
                  <h1>{item.description.split("-")[0]}</h1>

                  {
                    item.photos.length === 0 ? <> <img className="card-img"
                      alt="card_image"
                      src="https://a0.muscache.com/im/pictures/4b75813b-bc09-4719-b6b8-06a5f170724d.jpg?im_w=960" />
                      <span className="spann">
                        <img
                          alt="card_image2"
                          className="card-img"
                          src="https://a0.muscache.com/im/pictures/4b75813b-bc09-4719-b6b8-06a5f170724d.jpg?im_w=960" />
                      </span> </> : <>  <img
                        className="card-img"
                        alt="card_image"
                        src={item.photos[0].url} />
                      <span className="spann">
                        <img
                          alt="card_image2"
                          className="card-img"
                          src={item.photos[0].url} />
                      </span> </>
                  }

                  <ul>
                    <li>
                      <div className="center_description">
                        <MdLocationCity></MdLocationCity>
                        <p>{item.direction}</p>
                      </div>
                    </li>
                    <li>
                      <MdLocationPin></MdLocationPin>
                      <div className="center_description">
                        <p>{item.city.name}</p>
                      </div>
                    </li>
                    <li>
                      <MdMeetingRoom></MdMeetingRoom>
                      <div className="center_description">
                        <p>{item.description.split("-")[1]}</p>
                      </div>
                      <GiBathtub></GiBathtub>
                      <div className="center_description">
                        <p>{item.description.split("-")[2]}</p>
                      </div>
                    </li>
                  </ul>

                  <p></p>

                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Houses;
