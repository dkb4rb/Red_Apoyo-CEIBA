import React, { useEffect, useState } from "react";
import Message from "../../Error/Message";
import Loader from "../../Loader/Loader";
import Editpublicar from "./EditPublicar";


const Editpublic = ({ datos, setPublicar, Publica, Location_user}) => {
  
  
  useEffect(()=>{
    console.log("Este es los datos que llegan en edit public")
    console.log(form)
  })

  
  
  const [form, setForm] = useState(datos.props);
  // const [editForm, setEditForm] = useState(null);
  const [Err, setErr] = useState(null);
  const [Loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.nombre ||
      !form.Telefono ||
      !form.Direccion ||
      !form.Habitaciones
    ) {
      alert("Completa tu Publicacion");
    }
  };
  const handleChange = async (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div>
        <div className="container">
          {Err && (
            <Message Mensaje={"Error " + Err.status + " : " + Err.statusText} />
          )}
          {Loading &&(
            <Loader />
          )}
          {!form && <h1>Error al conectar a la base de datos</h1>}

          <Editpublicar
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setLoading={setLoading}
            setForm={setForm}
            setErr={setErr}
            form={form}
            setPublicar={setPublicar}
            Publica={Publica}
            location={Location_user}
          />
        </div>
      </div>
    </div>
  );
};
export default Editpublic;
