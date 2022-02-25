import React, { useEffect } from 'react';
import 'bootstrap'
import 'reactstrap'
import $ from 'jquery'
import './Carousell.css';

const Carousel = () => {

  useEffect (  () => {

  }, [])

    return (
      <div className="container_carousel">
       <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img className="d-block w-100" src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://paisapues.com/wp-content/gallery/bosko/1_55861154_767400236977838_1672752997148393472_n.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a9/fa/02/enjoy-the-arizona-sunrise.jpg?w=1100&h=-1&s=1" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a9/fa/02/enjoy-the-arizona-sunrise.jpg?w=1100&h=-1&s=1" alt="Third slide"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#second slide" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
        </div>
      </div>
    );
}

export default Carousel;