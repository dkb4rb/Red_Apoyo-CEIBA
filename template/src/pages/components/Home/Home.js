import React from "react";
import './Home.css';

const redirect  = () => {
    window.location.href='./Login';
}

const Home = () => {

    return (
        <div>
        
        <header className="header_col" id="header_color">
                    <div class="logo_navbar">
                        <img src="" alt="Necesitas cargar el logo"></img>
                    </div>
                    <div class="nav_principal">
                        <nav className="sections">
                            <ul>
                                <li>
                                    <a className="aref" href="./home">Inicio</a>
                                </li>
                                <li>
                                    <a className="aref" href="./">Sobre Nosotros </a>
                                </li>
                                <li>
                                    <div className="li_button">
                                        <button className="btn btn-primary" type="button" onClick={() => redirect()}>Log In</button>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
        </div>
    );
}

export default Home;