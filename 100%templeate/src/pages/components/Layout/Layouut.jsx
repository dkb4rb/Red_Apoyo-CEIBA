import React, { useState, useEffect } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../../Menu/Menu';
import Map from '../Map/Map';
import Hous from '../Hous/Hous';
import Public from '../Publicar/Public'


const Layouut = () => {

    const [lng, setLng] = useState({
        longitude: 0,
        latitude: 0
    })
    const [menu, setMenu] = useState(true);
    const [publicar, setPublicar] = useState(false);
    const [Mapa, setMapa] = useState(false);
    const [All, setAll] = useState(false);


    useEffect(() => {

        navigator.geolocation.getCurrentPosition(
            function (position) {
                setLng({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })
            },
            function (error) { },
            {
                enableHighAccuracy: true
            }
        );
        if (window.location.pathname === "/Products") {
            setMenu(false);
            setPublicar(false);
            setMapa(false);
            setAll(true);
        }
        else if (window.location.pathname === "/MapView") {
            setMenu(false);
            setPublicar(false);
            setMapa(true);
            setAll(false);
        }
        else if (window.location.pathname === "/Public") {
            setMenu(false);
            setPublicar(true);
            setMapa(false);
            setAll(false);
        } else {
            setMenu(true);
            setPublicar(false);
            setMapa(false);
            setAll(false);
        }
    }, []);



    function manage_states(state) {

        if (state === "menu") {
            if (!menu) {
                window.location.href = "./menu"
            }
        }
        else if (state === "publicar") {
            if (!publicar) {
                window.location.href = "./Public"
            }
        }
        else if (state === "Mapa") {
            if (!Mapa) {
                window.location.href = "./MapView"
            }
        }
        else if (state === "All") {
            if (!All) {
                window.location.href = "./Products"
            }
        }
    }

    return (
        <div className='container_menu'>
            <div>
                <Header manage_states={manage_states} username={localStorage.getItem("name_usr")} />
            </div>
            <br />
            <br />
            <div>
                <div className='Sections'>
                    {menu && <Menu />}
                    {publicar && <Public setPublicar={setPublicar} Location_user={lng} />}
                    {Mapa && <Map />}
                    {All && <Hous />}

                </div>
            </div>
            <div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layouut