import React from "react";
import { helpHttp } from "./helpHttp";
import Exist from "../components/Messages/Exist/Exist";

const DbUrl="http://localhost:3001/usuarios";
let api = helpHttp();



const CrearUsuario = (form) => {
        
    api.get(DbUrl).then((res) => {
        if(!res.err){
            let index = 0;
            while(index < res.length){
                var resp = res[index];
                if(resp.username === form.username){
                    console.log(resp.username);
                    console.log(resp);
                }
                index++;
            }
        };
    });
    //if({state}>0){
    //cookies.set('id', respuesta.id, {path: "/"});
    //cookies.set('apellido', respuesta.apellido, {path: "/"});
    //cookies.set('nombre', respuesta.nombre, {path: "/"});
    //cookies.set('username', respuesta.username, {path: "/"});
    console.log('Crear usuario esta listo');
    //window.location.href="./menu";
    // }else{
    //   alert("El usuario Ya Existe");
    //}
    return (
        <div>
            <h1>Holas</h1>
        </div>
    );
}
export default CrearUsuario;