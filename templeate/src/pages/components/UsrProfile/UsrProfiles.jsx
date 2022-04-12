import React, {useState, useEffect}from 'react'
import More from './More/More'
import Loader from '../Loader/Loader'
import axios from 'axios'
import "./UsrProfile.css"

function verydata(data) {
  if(data === null){
    console.log("la data no carga");
    
  }else{
    console.log("============= WIIIII RECIBIMOS LA DATA =============")
    console.log(data);
  }
}

const UsrProfiles = () => {
  const [db, setdb] = useState([]); 
  const urldb = `https://isnft-prod.azurewebsites.net/api/users/${localStorage.getItem('id_usr')}`


  useEffect(()=>{
    console.log("holass")
    setdb("")
  })
 
  return (
  <div className='usr_profiles_container'>
  
      <section className="perfil-usuario">
        <div className="contenedor-perfil">
          <div className="portada-perfil">
            <div className="sombra"></div>
            <div className="avatar-perfil">
              <img src="https://cdn-icons-png.flaticon.com/512/6908/6908753.png" alt="img"></img>
                <a href="./Menu" className="cambiar-foto">
                  <i className="fas fa-camera"></i>
                  <span>Cambiar foto</span>
                </a>
            </div>
            <div className="datos-perfil">
              <h4 className="titulo-usuario">db.userName</h4>
              <h4 className="titulo-username">db.person.name dtusercom.person.lastName</h4>
              <p className="bio-usuario">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              <ul className="lista-perfil">
                <li>35 Seguidores</li>
                <li>7 Seguidos</li>
                <li>32 Publicaciones</li>
              </ul>
            </div>
            <div className="opcciones-perfil">
              <button type="">Cambiar portada</button>
              <button type=""><i className="fas fa-wrench"></i></button>
            </div>
          </div>
          <div className="menu-perfil">
            <ul>
              <li><a href="#menu" title=""><i className="icono-perfil fas fa-bullhorn"></i> Publicaciones</a></li>
              <li><a href="#info" title=""><i className="icono-perfil fas fa-info-circle"></i> Informacion</a></li>
              <li><a href="#friend" title=""><i className="icono-perfil fas fa-grin"></i> Amigos 43</a></li>
              <li><a href="#fotos" title=""><i className="icono-perfil fas fa-camera"></i> Fotos</a></li>
            </ul>
          </div>
          <div className="more_info_perfil">
            <More></More>
          </div>
        </div>
      </section>
     
     
</div>
      )
}

      export default UsrProfiles