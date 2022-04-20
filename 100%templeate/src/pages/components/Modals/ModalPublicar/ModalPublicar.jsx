import React from 'react'
import DeleteHouse from '../../../helpers/helpDeleteHouse'

const ModalPublicar = ({ datos }) => {

    function loadDelete(params) {
        DeleteHouse(params.id, false);
    }


    return (
        <div className='overlay' id='modal_dele' >
            <div className="modal_delete" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{datos.props.description.split('-')[0]}</h5>
                            <button onClick={() => datos.setmodal({ id: datos.props.id, modal: false })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Estas seguro de Eliminarla.</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => datos.setmodal({ id: datos.props.id, modal: false })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button onClick={() => loadDelete(datos.props)} type="button" className="btn btn-danger">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPublicar