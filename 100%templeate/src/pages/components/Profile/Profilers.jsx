import React, { useEffect, useState } from 'react'
import Comentarios from './More/Comentarios/Comentarios';
import Reserv from '../Reservar/Reserv';
import getUserData from "../../helpers/helpgetdatausr"
import { MdOutlineLocationCity, MdMeetingRoom, MdEventAvailable } from "react-icons/md"
import { TiLocation } from "react-icons/ti"
import { RiMapPinUserFill } from "react-icons/ri"
import { HiOutlinePhotograph } from "react-icons/hi"
import { BsChatQuote } from "react-icons/bs"
import { GiBathtub } from "react-icons/gi"
import Loader from '../Loader/Loader';


import axios from 'axios';
import Cookies from 'universal-cookie';


const Profilers = ({ profile_Data, setSState }) => {
  const cookies = new Cookies()
  const [load, setLoad] = useState(true);
  const [noload, setnoload] = useState(false);

  // Hooks control de botones de perfil
  const [Coments, setComentarios] = useState({ susComentarios: true });
  const [Fotos, setFotos] = useState({ susFotos: false });
  const [Reserva, setNew_Reserva] = useState({ New_reserva: false });



  const [db, setdb] = useState([]);
  const urldb = `https://isnft-prod.azurewebsites.net/api/houses/${window.location.pathname.split("/")[2]}`
  // eslint-disable-next-line
  const [datmodal, setdatmoda] = useState([]);
  // eslint-disable-next-line
  var urlowner = ""


  function veryfy(estado) {

    if (estado === "Comentarios") {
      if (!Coments.susComentarios) {
        setComentarios({ susComentarios: true });
        setFotos({ susFotos: false });
        setNew_Reserva({ New_reserva: false })
      }
    }

    if (estado === "Fotos") {
      if (!Fotos.susFotos) {
        setComentarios({ susComentarios: false });
        setFotos({ susFotos: true });
        setNew_Reserva({ New_reserva: false })
      }
    }

    if (estado === "New_reserva") {
      if (!Reserva.New_reserva) {
        setNew_Reserva({ New_reserva: true })
        setFotos({ susFotos: false });
        setComentarios({ susComentarios: false });
      }
    }

  }


  useEffect(() => {
    if (!cookies.get('id_usr_tok')) {
      window.location.href = "/";
    }
    axios
      .get(urldb)
      .then(res => {
        setLoad(false);
        setdb(res.data);
        localStorage.setItem("ownerhouseid", res.data.ownerId);
        urlowner = `https://isnft-prod.azurewebsites.net/api/users/${localStorage.getItem("ownerhouseid")}`;
        setnoload(true);


      })
      .catch(err => console.log(err))



  }, []);



  function getUserDataload(idowner) {
    setLoad(true);
    setnoload(false);
    getUserData(idowner);
  }



  return (
    <div className='usr_profiles_container'>
      {load && (<div style={{ marginBottom: "16%", marginTop: "16%" }}> <Loader></Loader></div>)
      }
      {
        noload && (
          <section className="perfil-house">
            <div className="contenedor-perfil">

              {
                db.photos.length === 0 ? <>

                  <div className="portada-perfil-house" >
                    <div className="sombra"></div>

                    <div className="datos-perfil">
                      <h4 className="titulo-usuario">{db.description.split("-")[0]}</h4>
                      <p className="bio-usuario">
                        <TiLocation></TiLocation>
                        {db.city.name}</p>
                      <p className="bio-usuario">
                        <MdOutlineLocationCity></MdOutlineLocationCity>
                        {db.direction}</p>
                      <ul className="lista-perfil">
                        <li>
                          <MdMeetingRoom></MdMeetingRoom>
                          {db.description.split("-")[1]} Habitaciones</li>
                        <li>
                          <GiBathtub></GiBathtub>
                          {db.description.split("-")[2]} Baños</li>
                      </ul>
                      <div>
                        <div>
                          <MdEventAvailable></MdEventAvailable>
                          {db.startAvailabilityDate}
                        </div>
                        <div className='profile_usr_btn' onClick={() => getUserDataload(db.ownerId)}>
                          <RiMapPinUserFill></RiMapPinUserFill>
                        </div>

                      </div>
                      <button type='button' className='btn btn-secondary' onClick={() => veryfy("New_reserva")} >Reservar</button>


                    </div>

                    {
                      db.ownerId === Number(localStorage.getItem("ownerID")) ? <>

                        <div className="opcciones-perfil">
                          <button type="">Cambiar portada</button>
                          <button type=""><i className="fas fa-wrench"></i></button>
                        </div>

                      </> : <><span></span></>
                    }
                  </div>

                </>
                  :
                  <>

                    <div className="portada-perfil-house" style={{ backgroundImage: `url(${db.photos[0].url})` }} >
                      <div className="sombra"></div>

                      <div className="datos-perfil">
                        <h4 className="titulo-usuario">{db.description.split("-")[0]}</h4>
                        <p className="bio-usuario">
                          <TiLocation></TiLocation>
                          {db.city.name}</p>
                        <p className="bio-usuario">
                          <MdOutlineLocationCity></MdOutlineLocationCity>
                          {db.direction}</p>
                        <ul className="lista-perfil">
                          <li>
                            <MdMeetingRoom></MdMeetingRoom>
                            {db.description.split("-")[1]} Habitaciones</li>
                          <li>
                            <GiBathtub></GiBathtub>
                            {db.description.split("-")[2]} Baños</li>
                        </ul>
                        <div>
                          <div>
                            <MdEventAvailable></MdEventAvailable>
                            {db.startAvailabilityDate}
                          </div>
                          <div className='profile_usr_btn' onClick={() => getUserDataload(db.ownerId)}>
                            <RiMapPinUserFill></RiMapPinUserFill>
                          </div>

                        </div>
                        <button type='button' className='btn btn-secondary' onClick={() => veryfy("New_reserva")} >Reservar</button>


                      </div>




                      {
                        db.ownerId === Number(localStorage.getItem("ownerID")) ? <>

                          <div className="opcciones-perfil">
                            <button type="">Cambiar portada</button>
                            <button type=""><i className="fas fa-wrench"></i></button>
                          </div>

                        </> : <><span></span></>
                      }

                    </div>
                  </>

              }
              <div className="menu-perfil">
                <ul>
                  <li onClick={() => veryfy("Comentarios")}>
                    <a href="" title="">
                      <i className="icono-perfil fas fa-bullhorn">
                      </i>
                      Comentarios

                      <BsChatQuote style={{ marginLeft: "8px" }} ></BsChatQuote></a>
                  </li>
                  {
                    <li onClick={() => veryfy("Fotos")}>
                      <a href="" title="">
                        <i className="icono-perfil fas fa-info-circle">
                        </i>Fotos
                        <HiOutlinePhotograph style={{ marginLeft: "8px" }} ></HiOutlinePhotograph>
                      </a>
                    </li>
                  }

                </ul>

              </div>
              <div className="more_info_perfil">
                {
                  Coments.susComentarios && <>

                    {db ? <Comentarios id_pub={window.location.pathname.split('/')[2]} setdat={setdb}></Comentarios> : <h1>aun no hay Publicasiones</h1>//<Mispublicasiones setdat={setdb} />
                    }
                  </>

                }
                {
                  Fotos.susFotos && <>

                    {db && <> <h1>Fotos</h1>
                      <div style={{ background: "#4c47471c", boxShadow: "0px 0px 28px -6px", width: "80%", margin: "auto", borderRadius: "16px 93px 27px 82px", opacity: ".8" }} >
                        {
                          (

                            db.photos.length === 0 ?
                              <h1>Aun no hay fotos</h1> :
                              db.photos.map(
                                (item, index) => (
                                  <div key={index}>

                                    <img style={{
                                      width: "50%", margin: "10px", borderRadius: "10px 10px 10px 10px"
                                    }} alt={item.url} src={item.url} ></img>
                                  </div>
                                )
                              )

                          )
                        }
                      </div>

                    </>
                    }
                  </>
                }

                {
                  Reserva.New_reserva && <>
                    {
                      db && <><h1>Reservar</h1><Reserv></Reserv></>
                    }
                  </>
                }


              </div>
            </div>
          </section>

        )}
    </div>
  )
}
export default Profilers