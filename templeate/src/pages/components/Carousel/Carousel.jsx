import React from "react";
import "bootstrap";
import "reactstrap";
import "../Carousel/Carousell.css";
//import Message from "../Error/Message";

const Carousel = () => {

  
  return (
    <div className="container_carousel">
      <br />
      <br />
      <div className="carddd">
        <h1>Title</h1>
        <p>
          adipisicing elit. Recusandae
          stinctio
          itaque!
        </p>
        <img className="img_carrousel_Car " alt="profile_carousel" src="https://a0.muscache.com/im/pictures/bd619c0e-d1a8-4673-8766-0d50394825e2.jpg?im_w=720" />
        <br />
        <p>Ubicasion: </p>
        <button className="btn_carousel" onClick={() => alert('Redirigir al perfil de casa')} type="button">Ver Mas</button>
      </div>
      <br />
    </div>
  );
};

export default Carousel;
