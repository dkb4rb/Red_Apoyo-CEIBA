import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Carousel from '../components/Carousel/Carousel';
import Pagination from '../components/Pagination/Pagination';

import './Menu.css'

const cookies = new Cookies();




class Menu extends Component {

    componentDidMount() {
        if (!cookies.get('username')) {
            window.location.href = "./";
        }
    }

    render() {

        return (
            <div className='container_menu'>

                <div>
                    <div className="container_carousel_principal">

                        <div className='container' style={{margin: "auto"}}>

                            <div className='row'>
                                <Carousel />
                                <div className='col'>
                                    <Carousel />
                                </div>
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Menu;