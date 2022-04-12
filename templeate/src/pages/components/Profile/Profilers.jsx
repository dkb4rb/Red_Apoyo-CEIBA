import React from 'react'
import More from '../UsrProfile/More/More';

const Profilers = ({ profile_Data }) => {
  console.log("DAtataaaa");
  console.log(profile_Data);
  let parse_des = JSON.stringify(profile_Data.description);
  let nombre = parse_des;
  console.log(nombre)
  return (

      <div className='usr_profiles_container'>
        <section class="perfil-house">
          <div class="contenedor-perfil">
            <div class="portada-perfil-house">
              <div class="sombra"></div>

              <div class="datos-perfil">
                <h4 class="titulo-usuario">{profile_Data.nombre}</h4>
                <p class="bio-usuario">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <ul class="lista-perfil">
                  <li>35 Seguidores</li>
                  <li>7 Seguidos</li>
                  <li>32 Publicaciones</li>
                </ul>
              </div>
              <div class="opcciones-perfil">
                <button type="" onClick={() => alert("cambia tu portada")} >Cambiar portada</button>
                <button type=""><i class="fas fa-wrench"></i></button>
              </div>
            </div>
            <div class="menu-perfil">
              <ul>
                <li><a href="#menu" title=""><i class="icono-perfil fas fa-bullhorn"></i> Publicaciones</a></li>
                <li><a href="#comentarios" title=""><i class="icono-perfil fas fa-info-circle"></i> Comentarios
                </a></li>
                <li><a href="#fotos" title=""><i class="icono-perfil fas fa-grin"></i> Fotos</a></li>
                <li><a href="#fotos" title=""><i class="icono-perfil fas fa-camera"></i> Fotos</a></li>
              </ul>
            </div>

            <div class="more_info_perfil">
              <div className='zona_reserva'>Fecha_reserva</div>

              <More>
                <div className='zona_descripcion'></div>

                <div className='zona_costo'> {profile_Data.costo}</div>
              </More>
              <div className='zona_otros'>Otros</div>
            </div>
          </div>
        </section>
      </div>
    
  )
}

export default Profilers