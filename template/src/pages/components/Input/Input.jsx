import React from "react";
import './Input.css'

const Input = ({atributo, Error_H, parametro }) => {
    return (
        <div className="Input">
            <input 
                type="text"
                id={atributo.id}
                name={atributo.name}
                placeholder={atributo.placeholder}
                type={atributo.type}
                className="regular style"
                onChange={atributo.onChange}
             />
        </div>
    )
};

export default Input;