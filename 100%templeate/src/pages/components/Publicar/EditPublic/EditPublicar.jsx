import React, { useState } from "react";
import Selecct from "../../Select/Select";
import SelectLi from "../../Select/SelectLi";
import Input from "../../Input/Input";
import InputN from "../../Input/InputN";
import InputImg from "../../InputImg/InputImg";

import Title from "../../Title/Title";
import "./../Publicar.css";
import "./Edit.css"
import {AiFillDelete} from "react-icons/ai"

import Rent from "../../../../assets/img/Public/Rent.png";

import CreateHouse from "../../../helpers/helpCreateHouse";
import InputCheck from "../../InputCheck/InputCheck";
import Loader from "../../Loader/Loader";

const EditPublicar = ({
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

  function public_house(form, setErr, setForm, setPublicar, Publica, location) {
    //console.log(location)
    setLoad(true);
    //EditHouse(form, setErr, setForm, location);
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }

  return (
    <div className="container_editpublicar">
      <div className="Formulario_inputs">
        <Title title={page_name} />
        <div className="rent2">
            <img src={Rent} alt="Rentar_Hogar"></img>
          </div>
          <div className="rent">
            <img src={Rent} alt="Rentar_Hogar" style={{width:"200px", margin : "auto"}}  ></img>
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
                  value: form.description.split("-")[0]
                }}
              />
              <br></br>
            </div>
           
          
            <div className="In_puts">
              <Input
                atributo={{
                  id: "address",
                  name: "direction",
                  type: "text",
                  placeholder: "Direccion",
                  onChange: handleChange,
                  value : form.direction
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
                  value: Number(form.description.split("-")[1])
                
                }}
              />
              <br></br>
            </div>

</div>
<div>
            <div className="In_puts">
              <InputN
                atributo={{
                  id: "Bathrooms",
                  name: "Bathrooms",
                  type: "number",
                  placeholder: "Baños Disponibles",
                  onChange: handleChange,
                  value: Number(form.description.split("-")[2])
                }}
              />
              <br></br>
            </div>
            <div>
              <div className="mb-3">
                <label className="form-label" style={{color:"grey", fontSize:"20px", fontFamily:"inherit"}}>
                  Inserta tus Fotos
                </label>
                <div onChange={handleChange}><InputImg /></div>
              </div>
              {
                form.photos.map((item, index) =>( <div style={{display : "inline-flex"}} key={index}><img src={item.url} style={{width:"80px"}}></img> <AiFillDelete onClick={() => alert("estas seguro de eliminarla")} ></AiFillDelete> </div>))
              }
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
            Editar 
          </button>
          <div className="Load_p">{Load && <Loader />}</div>

        </div>
        <br></br>
      </div>
    </div>
  );
};

export default EditPublicar;
