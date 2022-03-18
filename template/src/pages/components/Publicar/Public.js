import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Message from "../Error/Message"
import Publicar from "./Publicar";


const DbUrl = "http://localhost:3002/Houses";


const Public = () => {
    const [form, setForm] = useState([]);
    // const [editForm, setEditForm] = useState(null);
    const [Err, setErr] = useState(null);
    const [Loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if ((!form.nombre || !form.Telefono) || (!form.Direccion || !form.Habitaciones)) {
            alert('Completa tu Publicacion');
        }
    }
    const handleChange = async (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return (

            <div className="container">
    
                <div>
                    <div className="container">
                        {Loading && <Loader />}
                        {Err && <Message Mensaje={'Error ' + Err.status + ' : ' + Err.statusText} />}
                        {!form && (<h1>Error al conectar a la base de datos</h1>)}
                        
                        <Publicar handleChange={handleChange} handleSubmit={handleSubmit} setLoading={setLoading} setForm={setForm} setErr={setErr} form={form} />
                    </div>
                </div>
            </div>


    );
}
export default Public;
