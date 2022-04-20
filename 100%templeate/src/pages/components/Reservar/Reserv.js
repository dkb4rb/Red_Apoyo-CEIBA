import React, { useState } from "react";
import Message from "../Error/Message";
import Loader from "../Loader/Loader";
import Reservar from "./Reservar";
import Publicar from "./Reservar.css";


const Reserv= ({ setPublicar, Publica, Location_user}) => {
  const [formreserva, setForm] = useState({});
  // const [editForm, setEditForm] = useState(null);
  const [Err, setErr] = useState(null);
  const [Loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formreserva.startDate ||
      !formreserva.houseId ||
      !formreserva.finishDate
    ) {
      alert("Completa tu Publicacion");
    }
  };
  const handleChange = async (e) => {
    setForm({
      ...formreserva,
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
          {!formreserva && <h1>Error al conectar a la base de datos</h1>}

          <Reservar
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setLoading={setLoading}
            setForm={setForm}
            setErr={setErr}
            form={formreserva}
            setPublicar={setPublicar}
            Publica={Publica}
          />
        </div>
      </div>
    </div>
  );
};
export default Reserv;
