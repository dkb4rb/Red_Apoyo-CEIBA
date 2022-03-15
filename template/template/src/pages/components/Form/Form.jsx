import React from "react";

import Input from '../Input/Input';
import Label from '../Label/Label';
import Title from "../Title/Title";
import './Form.css'

const Form = ({ handleSubmit, handleChange, CrearUsuario, setLoading, setForm, setErr, form }) => {

    return (
        <div className="Formulario_inputs">

            <Title title="Registrar" subtitle="Usuario" />


            <form onSubmit={handleSubmit}>

                <div className="In_puts">
                    <Input atributo={{
                        id: 'user_name',
                        name: 'nombre',
                        type: 'text',
                        placeholder: 'Ingrese su Nombre',
                        onChange: handleChange

                    }}

                    /><br></br>
                </div>
                <div className="In_puts" >

                    <Input atributo={{
                        id: 'username',
                        name: 'username',
                        type: 'text',
                        placeholder: 'Ingrese su Usuario',
                        onChange: handleChange

                    }}
                    /><br></br>
                </div>
                <div className="In_puts">
                    <Input atributo={{
                        id: 'password',
                        name: 'password',
                        type: 'password',
                        placeholder: 'Ingrese su Contraseña',
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
                        placeholder: 'Ingrese su Pais',
                        onChange: handleChange

                    }}
                    /><br></br>

                </div>

                <div className="In_puts" >
                    <Input atributo={{
                        id: 'user_city',
                        name: 'city',
                        type: 'text',
                        placeholder: 'Ingrese su Ciudad',
                        onChange: handleChange

                    }}
                    /><br></br>

                </div>

                <div className="In_puts" >
                    <Input atributo={{
                        id: 'user_addres',
                        name: 'user_addres',
                        type: 'text',
                        placeholder:'Ingresa tu Direccion',
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
    );
}

export default Form;