import React from 'react';
import Cookies from 'universal-cookie';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from '../Card/card';


const cookies = new Cookies();

const redirect = () =>{

    window.location.href('./Login');
}

const products = () => {

    function cerrarSesion() {
        cookies.remove('id', { path: "/" });
        cookies.remove('apellido_paterno', { path: "/" });
        cookies.remove('apellido_materno', { path: "/" });
        cookies.remove('nombre', { path: "/" });
        cookies.remove('username', { path: "/" });
        window.location.href = './';
    }

    const componentDidMount = () => {
        if (!cookies.get('username')) {
            window.location.href = "./";
        }
    }

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

export default products