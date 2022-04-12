import React, { useEffect, useState } from "react";
import {gethouses} from "../../../helpers/helpgethouses"
import Loader from "../../Loader/Loader";
import "./Houses.css";


const new_pr = (renta)=>{
    renta+=1;
    window.location.href=`/Products/${renta}`;
}


const Houses = ({houses = []}) => {
  //const [img, setimg] = useState(false);

  const [load, setload] = useState(true) 
  const [db, setdb] = useState([]) 

 useEffect(()=>{
  console.log("Houses")
    console.log(houses.result)
    setdb(houses.result);
    setload(false);
  })

  return (
    <div>
      <div className="Houses_Container">
        <div className="Houses">
          <div className="row">
            
            {db &&
              db.map((item, index ) => (
              <div key={index} className="col">
                <div
                  onClick={() => new_pr(index)}
                  className="cardd"
                  style={{ cursor: "pointer", margin:"auto", marginTop: "10px" }}
                >
                  <h1>{item.description.split("-")[0]}</h1>
                  <img
                    className="card-img"
                    alt="card_image"
                    src="https://a0.muscache.com/im/pictures/4b75813b-bc09-4719-b6b8-06a5f170724d.jpg?im_w=960"
                  />
                  <span className="spann">
                    <img
                    alt="card_image2"
                      className="card-img"
                      src="https://a0.muscache.com/im/pictures/4b75813b-bc09-4719-b6b8-06a5f170724d.jpg?im_w=960"
                    />
                  </span>
                  <p>
                    <p>{item.direction}</p>
                
                    {item.city.name}
                  </p>
                  <p></p>
                  <div className="ValueHouse">
                    <i class="bi bi-coin"></i>
                    <p>{item.description.split("-")[3]}</p>
                  </div>
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
