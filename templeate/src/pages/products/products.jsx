import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Card from '../components/Card/card';


const cookies = new Cookies();

const redirect = () =>{
    window.location.href('./Login');
}



export class products extends Component{

    componentDidMount() {
        if (!cookies.get('id_usr_tok')) {
            window.location.href = "./menu";
        }
    }

    /**
     * Funtion to CLose Sesion user
     *
    function cerrarSesion() {
        cookies.remove('id', { path: "/" });
        window.location.href = './';
    }
    *
     * this component is to review the value the cookie and
     *
    const componentDidMount = () => {
        if (!cookies.get('username')) {
            window.location.href = "./";
        }
    }
*/
render(){

    return (
        <div className='container_menu'>
                <div>
                    <Header />
                </div>
                <br />
                <br />
                <div>
                    <div className="container_carousel_products">                      
                        <Card />
                    </div>
                </div>
                <div>
                
                    <br />
                    <div className="li_button">
                        <button className="btn btn-primary" type="button" onClick={() => redirect()}>Log In</button>
                    </div>
                    <button className="btn btn-secondary" type="button" onClick={() => this.cerrarSesion()}>Cerrar Sesión</button>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
  )
}
}
