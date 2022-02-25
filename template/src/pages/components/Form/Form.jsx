import React from "react";

import Input from '../Input/Input';
import Label from '../Label/Label';
import './Form.css'

const Form = ({handleSubmit, handleChange, CrearUsuario, setLoading, setForm, setErr, form}) => {
    
    return(
        <div className="Formulario_inputs">
        <form onSubmit={handleSubmit}>
            
            <div className="In_puts">
                <Input atributo={{
                    id:'user_name',
                    name:'nombre',
                    type:'text',
                    placeholder:'Ingrese su Nombre',
                    onChange:handleChange
                    
                }}

                /><br></br>
            </div>
            <div className="In_puts" >
                <Input atributo={{
                    id:'user_lastname',
                    name:'apellido',
                    type:'text',
                    placeholder:'Ingrese su Apellido',
                    onChange:handleChange
                    
                }}
                /><br></br>
            
            </div>
            <div className="In_puts" >
                <Input atributo={{
                    id:'Fecha_Nacimiento',
                    name:'Fecha_Nacimiento',
                    type:'text',
                    onChange:handleChange   
                }}
                /><br></br>
            </div>

            <div className="In_puts" >

                <Input atributo={{
                    id:'username',
                    name:'username',
                    type:'text',
                    placeholder:'Ingrese su Usuario',
                    onChange:handleChange
                    
                }}
                /><br></br>
            </div>

            <div className="In_puts">
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
            </div>
            <div className="buttons">
                <button
                    className="btn btn-primary"
                    onClick={() => CrearUsuario(form, setErr, setForm,setLoading)}>Registrar
                </button>
            </div>
        </form>
    </div>
    );
}

export default Form;