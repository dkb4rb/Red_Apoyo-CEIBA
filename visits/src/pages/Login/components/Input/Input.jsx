import React from "react";
import './input.css'

 const Input = ({atributo, Error_H, parametro }) => {
    return (
        <div className="Input">
            <input 
                type="text"
                id={atributo.id}
                name={atributo.name}
                placeholder={atributo.placeholder}
                type={atributo.type}
                onChange={(e) => Error_H(e.target.name,e.target.value)}
                className="regular style"
             />
        
        </div>
    )
};

export default Input;