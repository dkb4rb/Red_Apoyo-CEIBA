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
                                <button onClick={() => manage_states("menu")} type="button" className="btn btn-outline-primaryy">Inicio</button>
                                <button onClick={() => manage_states("publicar")} type="button" className="btn btn-outline-primaryy">Publicar</button>
                                <button onClick={() => manage_states("Mapa")} type="button" className="btn btn-outline-primaryy">Buscar Por Mapa</button>
                                <button onClick={() => manage_states("All")} type="button" className="btn btn-outline-primaryy">Listar Todo</button>
                            </div>
                        </nav>
                    </div>

                    <form type="submit" className="form-inline my-2 my-lg-0">
                        <div className="input-group rounded">
                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span className="input-group-textt border-0" id="search-addon">
                                <i onClick={() => alert('Iniciar la busqueda')} className="gg-search"></i>
                            </span>
                        </div>
                    </form>

                </div>

                <div className="nav_principall">
                    <nav className="sections">
                        <ul>
                                <li>
                                    <div className="aref" href="#">{username}</div>
                                </li>
                            <div className="aref_back" onClick={clic_perfil}>
                                <i  className="aref_back_list_icon bi bii-list"  ></i>
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