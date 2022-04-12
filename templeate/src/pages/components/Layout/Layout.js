import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Cookies from 'universal-cookie';

import Layouut from './Layouut';
import './Layout.css'

const cookies = new Cookies();

/**
 * 
 * const redirect = () => {
 *    window.location.href = './Login';
 *   }
 * */

class Layout extends Component {
    
    cerrarSesion = () => {
        cookies.remove('id_usr_tok', { path: "/" });
        window.location.href = './';
    }

    componentDidMount() {
        if (!cookies.get('id_usr_tok')) {
            window.location.href = "./";
        }
        
    }

    render() {
        return (
            <>
                <Layouut />
            </>
        );
    }
}

export default Layout;