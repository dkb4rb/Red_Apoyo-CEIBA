import React, { useEffect, useState } from "react";

import { helpHttp } from "../../helpers/helpHttp";
import ComponentDidMount from "../../helpers/component/componentDidMount";

import './Registro.css';

import Form from '../Form/Form';
import Title from '../Title/Title';
import Loader from "../Loader/Loader";
import Message from "../Error/Message"
import CrearUsuario from "../../helpers/helpCrearUsario";


const DbUrl="http://localhost:3001/usuarios";
let api = helpHttp();

const initform = {
       "id": null,
      "apellido": "",
      "nombre": "",
      "username": "",
      "password": "",
      "mssg": "Holas"
};

const Registro = () => {
    const [form ,setForm] = useState([]);
   // const [editForm, setEditForm] = useState(null);
    const [Err,setErr] = useState(null);
    const [Loading, setLoading] = useState(false);


    const handleSubmit = async (e) =>{
        e.preventDefault();
        if((!form.username || !form.password) || (!form.nombre || !form.apellido) ){
            alert('Completa el Form');
        }
    }
    const handleChange = async (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

           
    ComponentDidMount();
    return (
        <div className="containerPrincipal"> 
            <div>
                <div className="container_registro">
                    {Loading && <Loader />}
                    {Err && <Message Mensaje={'Error ' + Err.status + ' : ' + Err.statusText}/>}
                    {!form && (<h1>Error al conectar a la base de datos</h1>)}
                    <div className="form-group">
                        <div className="Logo_Regis"></div>
                        <Title 
                            title='Red de Apoyo'
                            subtitle='CEIBA'
                        />
                    </div>
                   <Form handleChange={handleChange} handleSubmit={handleSubmit} CrearUsuario={CrearUsuario} setLoading={setLoading} setForm={setForm} setErr={setErr} form={form} />
                </div>
            </div>
        </div>
    );
}
export default Registro;
