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
        username: '',
        password: '',
        id:null
};

const Registro = () => {
    const [form ,setForm] = useState(initform);
   // const [editForm, setEditForm] = useState(null);
    const [Err,setErr] = useState(null);
    const [Loading, setLoading] = useState(false);

    useEffect( () => {
        setLoading(true);
        api.get(DbUrl).then((res) => {
            //console.log(res);
            if(!res.err){
                setForm(res);
                setErr(null);
            }else {
                setForm(null);
                setErr(res)
            }
        });
        setLoading(false);
    },[]
    )
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!form.username || !form.password){
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
                        <Title 
                            title='Red de Apoyo'
                            subtitle='CEIBA'
                        />
                    </div>
                   <Form handleChange={handleChange} handleSubmit={handleSubmit} CrearUsuario={() => CrearUsuario(form)}/>
                </div>
            </div>
        </div>
    );
}
export default Registro;
