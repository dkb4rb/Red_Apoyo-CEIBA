import React , {useState}from "react";

import Input from "../Input/Input";
import Title from "../Title/Title";
import Loader from "../Loader/Loader";
import logo_CEIBA from "../../../assets/img/LOgo_text.png";
import "./Form.css";
import Select from "../Select/Select";
import SelectLi from "../Select/SelectLi";


const Form = ({
  handleSubmit,
  handleChange,
  CrearUsuario,
  setLoading,
  setForm,
  setErr,
  form,
}) => {
  const [Load, setLoad] = useState(false);

  return (
    <div className="Formulario_inputs">
      <div className="Load_pp">{Load && <Loader />}</div>

      <img className="icon_reg" alt="Icon_logo" src={logo_CEIBA}></img>
      <Title title="Registrar" subtitle="Usuario" />
      <form onSubmit={handleSubmit}>
        <div className="gridd">
          <div className="row">
            <div className="In_puts">
              <Input
                atributo={{
                  id: "user_name",
                  name: "name",
                  type: "text",
                  placeholder: "Ingrese su Nombre",
                  onChange: handleChange,
                }}
              />
              <br></br>
            </div>
            

            <div className="In_puts">
              <Input
                atributo={{
                  id: "user_lastname",
                  name: "lastName",
                  type: "text",
                  placeholder: "Ingrese su Apellido",
                  onChange: handleChange,
                }}
              />
              <br></br>
            </div>

            <div className="In_puts">
              <Input
                atributo={{
                  id: "username",
                  name: "userName",
                  type: "text",
                  placeholder: "Ingrese su Usuario",
                  onChange: handleChange,
                }}
              />
              <br></br>
            </div>
            <div className="In_puts">
              <Input
                atributo={{
                  id: "password",
                  name: "password",
                  type: "password",
                  placeholder: "Ingrese su Contraseña",
                  onChange: handleChange,
                }}
              />
              <br />
              <br />
            </div>
          </div>
          <div className="row">
          <div className="In_puts">
              <Input
                atributo={{
                  id: "user_email",
                  name: "email",
                  type: "email",
                  placeholder: "Ingrese su Correo",
                  onChange: handleChange,
                }}
              />
              <br></br>
            </div>
            <div className="In_puts" name="country" onChange={handleChange}>
              <Select />
              <br></br>
            <div className="In_puts" name="cityId" onChange={handleChange}>
               <SelectLi />
              <br></br>
            </div>
            </div>

            <div className="In_puts">
              <Input
                atributo={{
                  id: "user_addres",
                  name: "phone",
                  type: "tel",
                  placeholder: "Ingresa tu Telefono",
                  onChange: handleChange,
                }}
              />
              <br></br>
            </div>
            <div className="In_puts">
              <input className="dat_in" type="date" name="birthday" onChange={handleChange}></input> 
              <br></br>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button
            className="btn btn-primary"
            onClick={() => CrearUsuario(form, setErr, setForm, setLoad)}
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
