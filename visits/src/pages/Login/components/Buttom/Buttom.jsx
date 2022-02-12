import React from "react";
import {iniciarSesion} from '../../Login.js'

const Buttom = () => {
    return (
        <div className="Buttom">
            <button  onClick={()=> this.iniciarSesion()}>Log In</button>
        </div>
    )
};
export default Buttom;