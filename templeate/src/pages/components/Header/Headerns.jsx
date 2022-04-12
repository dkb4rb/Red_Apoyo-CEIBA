import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "../Dropdown/Dropdown";
import './Header.css';

const Header = ({manage_states, username }) => {

    const [Clic_perfil, setClic_perfil] = useState(false);

    function clic_perfil() {
        if (!Clic_perfil) {
            setClic_perfil(true);
        } else {
            setClic_perfil(false);
        }
    }



    return (
        <>
            <header className="header_col" id="header_color">
                <div className="logo_navbar">
                </div>

                <div className="control_btn_search">
                    <div className="head_btns">
                        <nav className="sections">
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                <button onClick={() => window.location.href="/menu"} type="button" className="btn btn-outline-primaryy">Inicio</button>
                                <button onClick={() => window.location.href="/Public"} type="button" className="btn btn-outline-primaryy">Publicar</button>
                                <button onClick={() => window.location.href="/MapView"} type="button" className="btn btn-outline-primaryy">Buscar Por Mapa</button>
                                <button onClick={() => window.location.href="/Products"} type="button" className="btn btn-outline-primaryy">Listar Todo</button>
                            </div>
                        </nav>
                    </div>

                

                </div>

                <div className="nav_principall">
                    <nav className="sections">
                        <ul>
                                <li>
                                    <div className="aref" href="#">{localStorage.getItem("name_usr")}</div>
                                </li>
                            <div className="aref_back" onClick={clic_perfil}>
                                <i  className="aref_back_list_icon" className="bi bii-list"  ></i>
                                <li>
                                    
                                        <button className="btn usr_btn_menu" ></button>
                                        {Clic_perfil && <Dropdown /> }
                                  
                                </li>
                            </div>
                        </ul>
                    </nav>
                    <div>

                    </div>
                </div>
            </header></>
    )
}

export default Header;