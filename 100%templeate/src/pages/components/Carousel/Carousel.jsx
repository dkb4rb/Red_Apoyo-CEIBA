import React from "react";
import "bootstrap";
import "reactstrap";
import "../Carousel/Carousell.css";

const Carousel = () => {

  return (
    <div className="container_carousel">

      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i20.haber7.net/resize/1240x720//haber/haber7/photos/2019/50/hollywoodun_kalbi_melekler_sehri_los_angelesta_gezilecek_yerler_1576147364_9287.jpg" alt="Los Angeles" className="imgcontrol d-block" ></img>
            <div className="carousel-caption">
              <h3 className="titl">Los Angeles</h3>
              <p className="parrafos" >We had such a great time in LA!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.choosechicago.com/uploads/2021/10/DJI_0030-3-copy-scaled.jpg" alt="Chicago" className="imgcontrol d-block"></img>
            <div className="carousel-caption">
              <h3 className="titl" >Chicago</h3>
              <p className="parrafos"  > Thank you, Chicago!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://mediaim.expedia.com/destination/1/bdf1ae48fd89244218768dc6067ba16e.jpg?impolicy=fcrop&w=536&h=384&q=high" alt="New York" className="imgcontrol d-block"></img>
            <div className="carousel-caption">
              <h3 className="titl" >New York</h3>
              <p className="parrafos" >We love the Big Apple!</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
