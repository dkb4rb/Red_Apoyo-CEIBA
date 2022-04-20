import React, { useState, useEffect, Component } from 'react'
import { MdLocationCity, MdLocationPin, MdMeetingRoom, MdContactPhone} from "react-icons/md"
import { FaHouseUser } from 'react-icons/fa'
import { BsChatQuote } from "react-icons/bs"
import { GiBathtub } from "react-icons/gi"
import Loader from '../Loader/Loader';
import Error404 from '../Error/Error404';
import "./UsrProfilePublic.css"
import axios from 'axios';

const new_pr = (renta) => {
  window.location.href = `/Products/${renta}`;
}

const UsrProfiles = () => {
  const [load, setLoad] = useState(true);
  const [noload, setnoload] = useState(false);
  const [notfounf, setnotfound] = useState(false);

  // Hooks control de botones de perfil
  const [Comentarios, setComentarios] = useState({ susComentarios: false });
  const [Publicasiones, setPublicasiones] = useState({ susPublicasiones: true });


  const data_parsed = undefined;
  var [n_pub, setn_pub] = useState(0);
  const [db, setdb] = useState([]);


  const urldb = `https://isnft-prod.azurewebsites.net/api/users`
  function veryfy(estado) {

    if (estado === "publica") {
      if (!Publicasiones.susPublicasiones) {
        setComentarios({ susComentarios: false });
        setPublicasiones({ susPublicasiones: true });
      }
    }

    if (estado === "arriendo") {
      if (!Comentarios.susComentarios) {
        setComentarios({ susComentarios: true });
        setPublicasiones({ susPublicasiones: false });
      }
    }

  }


  useEffect(() => {

    var num_user = window.location.pathname.split("/")[2]
  

    axios
      .get(urldb)
      .then((resp) => {
        for (let index = 0; index < resp.data.result.length; index++) {
          const element = resp.data.result[index];
          if (element.person.id === Number(num_user)) {
            const urlusr = `${urldb}/${element.id}`;
            axios
              .get(urlusr)
              .then(res => {
                setdb(res.data)
                setn_pub(res.data.person.houses.length)
                setLoad(false);
                setnoload(true);
                localStorage.setItem("name_usr", res.data.userName);

              })
              .catch(err => {
                console.log(err)
                setnotfound(true);
                setLoad(false);
              })
          }
          if (!db) {
            setnotfound(true);
            setLoad(false);
          }

        }
      });






  }, []);


  return (

    <div className='usr_profiles_container'>
      {load && ( <div  style={{marginBottom:"16%", marginTop:"16%"}}> <Loader></Loader></div>)
      }
      {
        noload && (
          <section className="perfil-usuario">
            <div className="contenedor-perfil">
              <div className="portada-perfil">
                <div className="sombra"></div>
                <div className="avatar-perfil">
                  <img src="https://cdn-icons-png.flaticon.com/512/6908/6908753.png" alt="img"></img>
                  <a href="#info" className="cambiar-foto">
                    <i className="fas fa-camera"></i>
                    <span>Cambiar foto</span>
                  </a>
                </div>
                <div className="datos-perfil">
                  <h4 className="titulo-usuario">{localStorage.getItem("name_usr")}</h4>
                  <h4 className="titulo-username">{db.person.name} {db.person.lastName}</h4>
                  <ul className="lista-perfil">
                    <li>35 Seguidores</li>
                    <li> <MdContactPhone style={{fontSize:"20px"}}/><br/>{db.person.phone}</li>
                    <li>{n_pub} Publicaciones</li>
                  </ul>
                </div>
                <div className="opcciones-perfil" style={{ display: "none" }} >
                  <button type="">Cambiar portada</button>
                  <button type=""><i className="fas fa-wrench"></i></button>
                </div>
              </div>
              <div className="menu-perfil">
                <ul>
                  <li onClick={() => veryfy("publica")} >
                    <a href="#publicaciones" title=""  style={{display:"contents"}} >
                      <i className="icono-perfil fas fa-bullhorn">
                      </i> Publicaciones <FaHouseUser style={{marginLeft:"8px"}}></FaHouseUser>
                      </a>
                  </li>
                  <li onClick={() => veryfy("arriendo")}>
                    <a href="#ariendos" title="">
                      <i className="icono-perfil fas fa-info-circle">
                      </i> Comentarios <BsChatQuote style={{ marginLeft: "8px" }} ></BsChatQuote>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="more_info_perfil" style={{ display: "flex", justifyContent: "center" }}>
                {
                  Publicasiones.susPublicasiones && <>

                    {db.person.houses.map((item, index) => (
                      <div key={index} className="col">
                        <div
                          onClick={() => new_pr(item.id)}
                          className="cardd"
                          style={{ cursor: "pointer", margin: "auto", marginTop: "10px" }}
                        >
                          <h1>{item.description.split("-")[0]}</h1>
                          {
                            item.photos.length === 0 ? <> <img className="card-img"
                              alt="card_image"
                              src="https://a0.muscache.com/im/pictures/4b75813b-bc09-4719-b6b8-06a5f170724d.jpg?im_w=960" />
                              <span className="spann">
                                <img
                                  alt="card_image2"
                                  className="card-img"
                                  src="https://a0.muscache.com/im/pictures/4b75813b-bc09-4719-b6b8-06a5f170724d.jpg?im_w=960" />
                              </span> </> : <>  <img
                                className="card-img"
                                alt="card_image"
                                src={item.photos[0].url} />
                              <span className="spann">
                                <img
                                  alt="card_image2"
                                  className="card-img"
                                  src={item.photos[0].url} />
                              </span> </>
                          }
                          <ul>
                            <li>
                              <div className="center_description">
                                <MdLocationCity></MdLocationCity>
                                <p>{item.direction}</p>
                              </div>
                            </li>
                            <li>
                              <MdLocationPin></MdLocationPin>
                              <div className="center_description">
                                <p>{item.city.name}</p>
                              </div>
                            </li>
                            <li>
                              <MdMeetingRoom></MdMeetingRoom>
                              <div className="center_description">
                                <p>{item.description.split("-")[1]}</p>
                              </div>
                              <GiBathtub></GiBathtub>
                              <div className="center_description">
                                <p>{item.description.split("-")[2]}</p>
                              </div>
                            </li>
                          </ul>

                          <p></p>

                          <button type='button' className='btn btn-secondary'  >Reservar</button>
                        </div>
                      </div>
                    ))}

                  </>

                }
                {
                  Comentarios.susComentarios && <>

                    {db && //<Misarriendos setdat={setdb} />
                      <h1>

                        comentarios
                      </h1>
                    }

                  </>
                }

              </div>
            </div>
          </section>

        )}
      {
        notfounf && (
          <Error404></Error404>
        )
      }

    </div>
  )
}

export default UsrProfiles