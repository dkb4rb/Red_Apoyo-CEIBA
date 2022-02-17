import React from "react";

import Input from '../Input/Input';
import Label from '../Label/Label';
import './Form.css'
const Form = ({handleSubmit, handleChange, CrearUsuario}) => {
    
    return(
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
    );
}

export default Form;