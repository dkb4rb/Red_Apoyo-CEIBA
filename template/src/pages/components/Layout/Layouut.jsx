import React, {useState} from 'react'
import Cookies from 'universal-cookie';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Menu from '../../Menu/Menu';
import Map from '../Map/Map';
import Hous from '../Hous/Hous';
import Public from '../Publicar/Public'


const cookies = new Cookies();
const name_page = "Publicar Casa"

const Layouut = () => {

    const [menu, setMenu] = useState(true);
    const [publicar, setPublicar] = useState(false);
    const [Mapa, setMapa] = useState(false);
    const [All, setAll] = useState(false);


    function manage_states(state){

        if(state === "menu"){
            if(!menu){
                setPublicar(false);
                setMapa(false);
                setAll(false);
                setMenu(true);
            }
        }
        else if(state === "publicar"){
            if(!publicar){
                setMenu(false);
                setMapa(false);
                setAll(false);
                setPublicar(true);
            }
        }
        else if(state === "Mapa"){
            if(!Mapa){
                setMenu(false);
                setPublicar(false);
                setAll(false);
                setMapa(true);
            }
        }
        else if(state === "All"){
            if(!All){
                setMenu(false);
                setPublicar(false);
                setMapa(false);
                setAll(true);
            }
        }
    }


    return (
        <div className='container_menu'>
            <div>
                <Header manage_states={manage_states} username={cookies.get('nombre')} />
            </div>
            <br />
            <br />
            <div>
                <div className='Sections'>
                    {menu && <Menu />}
                    {publicar && <Public />}
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