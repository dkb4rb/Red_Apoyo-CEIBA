import React from "react";
import {iniciarSesion} from '../../Registro'
import './Buttom.css'

const Buttom = () => {
    render () {
        return (
        <div className="Buttom">
            <button  onClick={()=> this.iniciarSesion()}>Log In</button>
        </div>
    )
}
};
export default Buttom;