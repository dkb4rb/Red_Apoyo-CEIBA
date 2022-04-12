import React from "react";
import '../Registro/Registro.css';
import Title from '../components/Title/Title';
//import Loader from "../components/Loader/Loader";


// url de base de dat y api
//const DbUrl = "http://localhost:3003/calificacions";
//let api = helpHttp();

const Huesped = () => {
    
    return(
        <div className="Estadia_container">
            <form type="submit" className="control-form">

            <Title title={"Califica tu Huesped"}></Title>
            <input name="Huesp_calificasion" onChange={(e) => e.target.name = e.target.value}></input>
            <button className="btn btn-primary" type="submit" ></button>
            </form>
        </div>
    );
}
export default Huesped;
