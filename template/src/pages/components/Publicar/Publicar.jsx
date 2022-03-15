import React from "react";

import Input from '../Input/Input';
import Label from '../Label/Label';
import Title from "../Title/Title";
import './Publicar.css'

const Publicar = ({ handleSubmit, handleChange, CrearUsuario, setLoading, setForm, setErr, form, page_name }) => {

    return (
        <div className="container_publicar">
            <div className="Formulario_inputs">

                <Title title={page_name} />


                <form onSubmit={handleSubmit}>

                    <div className="In_puts">
                        <Input atributo={{
                            id: 'user_name',
                            name: 'nombre',
                            type: 'text',
                            placeholder: 'Disponibilidad',
                            onChange: handleChange

                        }}

                        /><br></br>
                    </div>
                    <div className="In_puts" >

                        <Input atributo={{
                            id: 'username',
                            name: 'username',
                            type: 'text',
                            placeholder: 'Telefono',
                            onChange: handleChange

                        }}
                        /><br></br>
                    </div>
                    <div className="In_puts">
                        <Input atributo={{
                            id: 'password',
                            name: 'password',
                            type: 'password',
                            placeholder: 'Pais',
                            onChange: handleChange

                        }}
                        />
                        <br />
                        <br />
                    </div>

                    <div className="In_puts" >
                        <Input atributo={{
                            id: 'user_lastname',
                            name: 'apellido',
                            type: 'text',
                            placeholder: 'Ciudad',
                            onChange: handleChange

                        }}
                        /><br></br>

                    </div>

                    <div className="In_puts" >
                        <Input atributo={{
                            id: 'user_city',
                            name: 'city',
                            type: 'text',
                            placeholder: 'Direccion',
                            onChange: handleChange

                        }}
                        /><br></br>

                    </div>

                    <div className="buttons">
                        <button
                            className="btn btn-primary"
                            onClick={() => CrearUsuario(form, setErr, setForm, setLoading)}>Registrar
                        </button>
                    </div>



                </form>
            </div>

        </div>
    );
}

export default Publicar;