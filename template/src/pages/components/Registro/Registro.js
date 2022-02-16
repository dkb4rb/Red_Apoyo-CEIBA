import React, { Component, useState } from "react";
import Cookies from 'universal-cookie';
import axios from 'axios';

import './Registro.css';

import Input from '../Input/Input';
import Title from '../Title/Title';
import Form from '../Form/Form';
import Label from '../Label/Label';


const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();

function ComponentDidMount () {

    if (cookies.get('username')) {
        window.location.href = "./menu";
    };
}

const initform = {
        username: '',
        password: '',
        id:null
};

const Registro = () => {
    const [form ,setForm] = useState(initform);
    
    const handleChange = async (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!form.username || !form.password){
            alert('Completa el Form');
        }
    }

    function CrearUsuario() {
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
    }
    ComponentDidMount();
    return (
        <div className="containerPrincipal"> 
            <div>
                <div className="container_registro">
                    <div className="form-group">
                        <h1 className="title">
                            Registro Red Apoyo
                            <br />
                            <a><b>CEIBA</b></a>
                        </h1>
                    </div>
                    <div className="Formulario_inputs">
                        <form onSubmit={handleSubmit}>
                            
                            <Label texto='Usuario'/>
                            <Input atributo={{
                                id:'username',
                                name:'username',
                                type:'text',
                                placeholder:'Ingrese su Usuario',
                                onChange:handleChange
                                
                            }}
                            /><br></br>

                            <Label texto='Contraseña'/>
                            <Input atributo={{
                                id:'password',
                                name:'password',
                                type:'password',
                                placeholder:'Ingrese su Contraseña',
                                onChange: handleChange
                                
                            }}
                            />
                            <br />
                            <br />
                            <div className="buttons">
                                <button
                                    className="btn btn-primary"
                                    onClick={CrearUsuario}>Registrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Registro;
