import React, { useEffect } from 'react';
import 'bootstrap'
import 'reactstrap'
import $ from 'jquery'
import '../Carousel/Carousell.css';

const Carousel = () => {


    return (
      <div className="container_carousel">
       <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img className="d-block w-100" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fviajesmao.com%2Fwp-content%2Fuploads%2F2020%2F03%2Fexperiencias-cruceros-portada.jpg&f=1&nofb=1" id="First_slide"/>
            </div>
            <div className="carousel-item2">
              <img className="d-block w-100" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a9/fa/02/enjoy-the-arizona-sunrise.jpg?w=1100&h=-1&s=1" id="Second_slide"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#First_slide" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
          <a  class="carousel-control-next" href="#Second_slide" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
        </div>
      </div>
    );
}

export default Carousel;