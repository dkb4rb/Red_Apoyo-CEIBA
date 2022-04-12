import React, { useState } from "react";
import ComponentDidMount from "../../pages/helpers/component/componentDidMount";

import "./Registro.css";

import Form from "../components/Form/Form";
import Message from "../components/Error/Message";
import CrearUsuario from "../../pages/helpers/helpCrearUsario";
import Loader from "../components/Loader/Loader";


const Registro = () => {
  const [form, setForm] = useState([]);
  // const [editForm, setEditForm] = useState(null);
  const [Err, setErr] = useState(null);
  const [Loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.userName || !form.password || !form.name || !form.lastName || !form.phone || !form.phone)  {
      alert("Completa todos los campos");
    }
  };
  const handleChange = async (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  ComponentDidMount();
  return (
    <>
      <div className="containerPrincipall">
        <div>
          
          <div className="container_registro">
            {Err && (
              <Message
                Mensaje={"Error " + Err.status + " : " + Err.statusText}
              />
            )}
            {Loading && (
              <Loader></Loader>
            )}
            {!form && <h1>Error al conectar a la base de datos</h1>}

            <Form
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              CrearUsuario={CrearUsuario}
              setLoading={setLoading}
              setForm={setForm}
              setErr={setErr}
              form={form}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Registro;
