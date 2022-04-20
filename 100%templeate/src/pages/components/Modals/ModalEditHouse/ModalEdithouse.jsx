import React from 'react'
import Editpublic from "../../Publicar/EditPublic/Editpublic"

const ModalEditHouse = ({ datos }) => {


    return (
        <div className='overlay' id='modal_dele' >
            <div className="modal_delete" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">  {datos.props.description.split('-')[0]}</h5>
                            <button onClick={() => datos.setmodaledit({ id: datos.props.id, modaledit: false })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">

                        </div>



                        <Editpublic datos={datos} ></Editpublic>



                        <div className="modal-footer">
                            <button onClick={() => datos.setmodaledit({ id: datos.props.id, modaledit: false })} type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEditHouse