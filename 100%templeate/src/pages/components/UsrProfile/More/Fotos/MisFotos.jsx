import React from 'react'
import InputCheck from '../../../InputCheck/InputCheck'
import InputCheckdDisp from '../../../InputCheck/InputCheckDisp'
import DeleteHouse from '../../../../helpers/helpDeleteHouse'
import GetLeases from '../../../../helpers/helpGetLeaes'
import { Modal } from '../../../Modals/ModalPublicar/Modalpublicar'

function loadDelete(params) {
  console.log(params.id)
  console.log("Se fue la data")
  DeleteHouse(params.id, false)
  
}


const MisFotos = ({ dataausr }) => {


  return (
    <div className='container_more_info'>
      <div className='row'>{dataausr.houses.map((item, index) => (
        <div key={index} className="col">
          <div class="card">

           
            <img class="card-img-top" src="https://cdn-icons-png.flaticon.com/512/6908/6908753.png" alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">{item.description.split("-")[0]}</h5>
             
              
              <div>
                <button  type='button' className='btn btn-success'>
                  Editar
                </button>
                <button type='button' className='btn btn-warning' onClick={() => Modal}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}</div>
    </div >
  )
}

export default MisFotos;