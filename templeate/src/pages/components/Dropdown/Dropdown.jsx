import React from 'react';
import './Dropdown.css';

import { cerrarSesion } from '../../helpers/cerrarSesion';
import { alerta } from '../../helpers/alerta';

const Dropdown = () => {
    return (
        <div className="dropdown">
            <ul className="dropdown-menu">
                <div>
                    <div>
                        <button className="btn btns_drop" type="button" onClick={alerta}>Mensajes</button>
                    </div>
                </div> <div>
                    <div>
                        <button className="btn btns_drop" type="button" onClick={alerta}>Notificaciones</button>
                    </div>
                </div>
                <div>
                    <div>
                        <button className="btn btns_drop" type="button" onClick={alerta}>Mis Viajes</button>
                    </div>
                </div>
                <div>
                    <div>
                        <button className="btn btns_drop" type="button" onClick={alerta}>Mis Favoritos</button>
                    </div>
                </div>
                <div>
                    <div>
                        <button className="btn btns_drop" type="button" onClick={() => window.location.href=`/usrprofile/${localStorage.getItem("id_usr")}`}>Cuenta</button>
                    </div>
                </div>
                <div>
                    <div>
                        <button className="btn btns_drop" type="button" onClick={alerta}>Ayuda</button>
                    </div>
                </div>
                <div>
                    <div>
                        <button className="btn btns_drop" type="button" onClick={cerrarSesion}>Cerrar Sesión</button>
                    </div>
                </div>
            </ul>

        </div>
    )
}

export default Dropdown