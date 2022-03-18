import React, { Component , useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Cookies from 'universal-cookie';

import Layouut from './Layouut';
import './Layout.css'

const cookies = new Cookies();

const redirect = () => {
    window.location.href = './Login';
}

class Layout extends Component {
    
    cerrarSesion = () => {
        cookies.remove('id', { path: "/" });
        cookies.remove('apellido_paterno', { path: "/" });
        cookies.remove('apellido_materno', { path: "/" });
        cookies.remove('nombre', { path: "/" });
        cookies.remove('username', { path: "/" });
        window.location.href = './';
    }

    componentDidMount() {
        if (!cookies.get('username')) {
            window.location.href = "./";
        }
    }

    render() {
        console.log('id: ' + cookies.get('id'));
        return (
            <>
                <Layouut />
            </>
        );
    }
}

export default Layout;