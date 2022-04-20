import React, { useState } from "react";
import {BsPersonCheck} from "react-icons/bs"
import Loader from "../Loader/Loader";
import LeaseHouse from "../../helpers/helpLeaseHouse"
import Title from "../Title/Title";
import "./Reservar.css";


import Rent from "../../../assets/img/Public/Reservar.png";

import CreateHouse from "../../helpers/helpCreateHouse";

const Reservar= ({
  handleSubmit,
  handleChange,
  setLoading,
  setForm,
  setErr,
  form,
  setPublicar,
  Publica,
  page_name,
}) => {
  const [Load, setLoad] = useState(false);
  const id_house = window.location.pathname.split("/")[2]
  

  function public_house(form, setErr, setForm, setPublicar, Publica) {
    //console.log(location)
    setLoad(true);
    const formtosend = {
        'startDate': `${form.startDate.split("-")[2]}-${form.startDate.split("-")[1]}-${form.startDate.split("-")[0]}`,
        'houseId' : Number(id_house),
        'finishDate' : `${form.finishDate.split("-")[2]}-${form.finishDate.split("-")[1]}-${form.finishDate.split("-")[0]}`
    }
   LeaseHouse(formtosend);
   // CreateHouse(form, setErr, setForm);
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }

  return (
    <div className="container_publicar">
      <div className="Load_p" style={{
              position: "absolute",
              left: "50%",
              top: "70%"
      }} >
          {Load && <Loader  />}
          </div>
      <div className="Formulario_inputs">
        <Title title={page_name} />
        <div className="rent2">
            <img src={Rent} alt="Rentar_Hogar"></img>
          </div>

        <form onSubmit={handleSubmit} className="form_dist">
          <div className="rent">
            <img src={Rent} alt="Rentar_Hogar"></img>
          </div>
         
          <div className="In_puts">
              <input className="dat_in" type="date" name="startDate" onChange={handleChange}></input> 
              <br></br>
            </div>
            <div className="In_puts">
              <input className="dat_in" type="date" name="finishDate" onChange={handleChange}></input> 
              <br></br>
            </div>
            <div className="In_puts" >
              <input placeholder="Personas" className="dat_in" style={{width:"174px"}} type="number" name="num_persons" onChange={handleChange}>
                  
                  </input> 
              <BsPersonCheck style={{fontSize:"26px", position:"absolute", marginLeft:"15px", marginTop:"10px"}} ></BsPersonCheck>
              <br></br>
            </div>
    


        </form>
        <div className="buttons">
          <button
            className="btn btn-primary"
            onClick={() =>
            
                public_house(form, setErr, setForm, setPublicar, Publica)
            }
          >
           Reservar Ahora
          </button>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Reservar;
