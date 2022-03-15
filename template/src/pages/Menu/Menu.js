import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Carousel from '../components/Carousel/Carousel';

import './Menu.css'

const cookies = new Cookies();

const redirect = () => {
    window.location.href = './Login';
}


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
                        <Carousel />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Menu;