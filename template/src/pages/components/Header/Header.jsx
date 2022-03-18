import React, { useEffect, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "../Dropdown/Dropdown";
import Cookies from "universal-cookie";

import './Header.css';
const cookies = new Cookies();

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
                            <div class="btn-group" role="group" aria-label="Basic outlined example">
                                <button onClick={() => manage_states("menu")} type="button" class="btn btn-outline-primaryy">Inicio</button>
                                <button onClick={() => manage_states("publicar")} type="button" class="btn btn-outline-primaryy">Publicar</button>
                                <button onClick={() => manage_states("Mapa")} type="button" class="btn btn-outline-primaryy">Buscar Por Mapa</button>
                                <button onClick={() => manage_states("All")} type="button" class="btn btn-outline-primaryy">Listar Todo</button>
                            </div>
                        </nav>
                    </div>

                    <form type="submit" class="form-inline my-2 my-lg-0">
                        <div class="input-group rounded">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <i onClick={() => alert('Iniciar la busqueda')} class="gg-search"></i>
                            </span>
                        </div>
                    </form>

                </div>

                <div class="nav_principall">
                    <nav className="sections">
                        <ul>
                                <li>
                                    <div className="aref" href="#">{username}</div>
                                </li>
                            <div className="aref_back" onClick={clic_perfil}>
                                <i  className="aref_back_list_icon" class="bi bii-list"  ></i>
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