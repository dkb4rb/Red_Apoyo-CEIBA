import React from "react";
import './Input.css'

const Input = ({atributo, Error_H, parametro , icon}) => {
    return (
        <div className="input-group mb-3">
                    
            <input 
                id={atributo.id}
                name={atributo.name}
                placeholder={atributo.placeholder}
                type={atributo.type}
                className="regular style form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={atributo.onChange}
                autoComplete="off"
                
             />
        </div>
    )
};



export default Input;