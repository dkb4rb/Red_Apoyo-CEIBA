import React from "react";
import './Input.css'

const Input = ({atributo, Error_H, parametro }) => {
    return (
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">@</span>
            </div>
            
            <input 
                id={atributo.id}
                name={atributo.name}
                placeholder={atributo.placeholder}
                type={atributo.type}
                className="regular style"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={atributo.onChange}
             />
        </div>
    )
};

export default Input;