import React, { useEffect, useState } from "react";
import Selecct from "../Select/Select";
import SelectLi from "../Select/SelectLi";
import Input from "../Input/Input";
import InputN from "../Input/InputN";

import Title from "../Title/Title";
import "./Publicar.css";

import Rent from "../../../assets/img/Public/Rent.png";

import CreateHouse from "../../helpers/helpCreateHouse";
import Loader from "../Loader/Loader";
import Cookies from "universal-cookie";

const Publicar = ({
  handleSubmit,
  handleChange,
  setLoading,
  setForm,
  setErr,
  form,
  setPublicar,
  Publica,
  page_name,
  location,
}) => {
  const [Load, setLoad] = useState(false);
  const cookies = new Cookies()
  function public_house(form, setErr, setForm, setPublicar, Publica, location) {
    //console.log(location)
    setLoad(true);
    CreateHouse(form, setErr, setForm, location);
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }

  useEffect(()=>{
    if (!cookies.get('id_usr_tok')) {
      window.location.href = "/";
  }
  })

  return (
    <div className="container_publicar">
      <div className="Load_p">{Load && <Loader />}</div>
      <div className="Formulario_inputs">
        <Title title={page_name} />
        <div className="rent2">
            <img src={Rent} alt="Rentar_Hogar"></img>
          </div>
          <div className="rent">
            <img src={Rent} alt="Rentar_Hogar"></img>
          </div>
        <form onSubmit={handleSubmit} className="form_dist">
         
          <div>
            <div className="In_puts">
              <Input
                atributo={{
                  id: "name_pub",
                  name: "name_pub",
                  type: "text",
                  placeholder: "Nombra Tu Publicacion",
                  onChange: handleChange,
                }}
              />
              <br></br>
            </div>
            <div className="locationss">
              <div className="In_puts" onChange={handleChange}>
                <Selecct
                  atributos={{
                    id: "Country",
                    name: "countyId",
                    placeholder: "Country",
                  }}
                ></Selecct>
                <br></br>
              </div>

              <div className="In_puts" onChange={handleChange}>
                <SelectLi
                  atributos={{
                    id: "Citi",
                    name: "citiId",
                    placeholder: "City",
                  }}
                ></SelectLi>
                <br></br>
              </div>
            </div>

           
          </div>

          <div>
            <div className="In_puts">
              <Input
                atributo={{
                  id: "address",
                  name: "direction",
                  type: "text",
                  placeholder: "Direccion",
                  onChange: handleChange,
                }}
              />
              <br></br>
            </div>
            <div className="In_puts">
              <InputN
                atributo={{
                  id: "rooms",
                  name: "rooms",
                  type: "number",
                  placeholder: "Habitaciones Disponibles",
                  onChange: handleChange,
                }}
              />
              <br></br>
            </div>
            <div className="In_puts">
              <InputN
                atributo={{
                  id: "Bathrooms",
                  name: "Bathrooms",
                  type: "number",
                  placeholder: "Baños Disponibles",
                  onChange: handleChange,
                }}
              />
              <br></br>
            </div>
            
          </div>
        </form>
        <div className="buttons">
          <button
            className="btn btn-primary"
            onClick={() =>
              public_house(form, setErr, setForm, setPublicar, Publica, location)
            }
          >
            Publicar
          </button>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Publicar;
