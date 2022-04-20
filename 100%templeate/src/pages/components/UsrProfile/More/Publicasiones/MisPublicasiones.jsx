import { Modalpublicar } from '../../../Modals/ModalPublicar/Modalpublicar';
import React, { useState } from 'react'
import { ModalEdithouse } from '../../../Modals/ModalEditHouse/ModalEdithoude';


const MisPublicasiones = ({ dataausr }) => {
  const [modal, setmodal] = useState({ id: null, modal: false });
  const [datmodal, setdatmoda] = useState([]);
  const [modaledit, setmodaledit] = useState({ id: null, modaledit: false })
  const [dataedit, setdataedit] = useState([])

    function veryfymodal(item, estado) {

    
        if (estado === "delete") {
          if (modal.modal) {
            if (modal.id === item.id) {
              setmodal({ id: item.id, modal: false })
            }
          } else {
            setmodal({ otr: modal, id: item.id, modal: true })
            setdatmoda({ datos_modal: item, setm: setmodal });
          }

        }

        if (estado === "edit") {
          if (modaledit.modaledit) {
            if (modaledit.id === item.id) {
              setmodaledit({ id: item.id, modaledit: false })
            }
          } else {
            setmodaledit({ otr: modal, id: item.id, modaledit: true })
            setdataedit({ dataedit_modal: item, setmodaledit: setmodaledit });
          }
      }



    }

  return (
    <div className='container_more_info'>
      <div className='row'>{dataausr.houses.map((item, index) => (
        <div key={index} className="col">
          <div className="card">

            {
              item.photos.length === 0 ? <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/6908/6908753.png" alt="Card image cap"></img> : <img className="card-img-top" src={item.photos[0].url} alt="Card image cap"></img>
            }



            <div className="card-body">
              <h5 className="card-title" style={{ background: "#6e5c5c5c", borderRadius: "0px 0px 28px 28px" }} >{item.description.split("-")[0]}</h5>

              <div>
                <p style={{ display: "flex" }}>Disponible: <br /></p>
                <p className="card-text"><small className="text-muted">De:{item.startAvailabilityDate}</small></p>
                <p className="card-text"><small className="text-muted">Hasta: {item.finishAvailabilityDate}</small></p>
              </div>
              <div>
                <button type='button' className='btn btn-success' onClick={() => veryfymodal(item, "edit")} >
                  Editar
                </button>
                <button type='button' className='btn btn-warning' onClick={() => veryfymodal(item, "delete")}>
                  Eliminar
                </button>

              </div>
            </div>
          </div>
        </div>
      ))}
        {
          modal.modal && <Modalpublicar props={datmodal.datos_modal} setmodal={setmodal} />
        }

        {
          modaledit.modaledit && <ModalEdithouse props={ dataedit.dataedit_modal}  setmodaledit={setmodaledit}></ModalEdithouse>
      }
      </div>
    </div >
  )
}

export default MisPublicasiones