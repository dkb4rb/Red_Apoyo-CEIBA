import React from 'react'


const InputN = ({atributo, Error_H, parametro , icon}) => {
    return (
        <div className="input-groupp mb-3">
                    
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

export default InputN