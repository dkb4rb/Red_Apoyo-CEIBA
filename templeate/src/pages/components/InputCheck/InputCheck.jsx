import React from 'react'
import './InputCheck.css'


const InputCheck = ({form, handlechange, setForm}) => {
    

    function upHouse(){
        if(!form.Estado){
        setForm({
            "Estado": true
        })
    }else{
        setForm({
            "Estado": false
        })
    }   
    }

    return (
    <div>
        <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  name="Estado"
                  onClick={() => upHouse()}
                  handlechange={handlechange}
                ></input>
                <label className="form-check-label" >
                  Disponibilidad
                </label>
              </div>
    </div>
  )
}

export default InputCheck