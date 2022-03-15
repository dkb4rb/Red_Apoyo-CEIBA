import React, {useState} from 'react'
import Cookies from 'universal-cookie';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Menu from '../../Menu/Menu';


import Publicar from '../Publicar/Publicar';


const cookies = new Cookies();
const name_page = "Publicar Casa"

const Layouut = () => {

    const [menu, setMenu] = useState(true);
    const [publicar, setPublicar] = useState(false);


    function manage_states(state){

        if(state === "menu"){
            if(!menu){
                setPublicar(false);
                setMenu(true);
            }
        }
        else if(state === "publicar"){
            if(!publicar){
                setMenu(false);
                setPublicar(true);
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
                    {publicar && <Publicar page_name={name_page} />}

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