import React from "react";
import { helpHttp } from "./helpHttp";
import Exist from "../components/Messages/Exist/Exist";
import { Form } from "reactstrap";
import axios from "axios";

const DbUrl="http://localhost:3002/usuarios";
let api = helpHttp();



const CrearUsuario = (data, setErr, setForm, setLoading) => {
    
    //console.log(data.id);
    
    data.id = Date.now();   
    axios({
        method:'POST',
        url:DbUrl,
        data:data
    }).then(res => console.log(res.data));
}
export default CrearUsuario;