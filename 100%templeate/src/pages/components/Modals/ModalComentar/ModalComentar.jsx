import React, { useState } from 'react'
import NewComment from '../../../helpers/helpNewComment'
import Puntuacion from './Puntuacion'

const ModalComentar = ({ datos }) => {
    const [form, setform] = useState([])

    function loadDelete(params, form) {
        NewComment(params.id, form.comment, Number(form.score))
    }


    const handleChange = async (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <div className='overlay' id='modal_dele' >
            <div className="modal_delete" >
                <div className="modal-dialog">
                    <div className="modal-content_comment">
                        <div className="modal-header">
                            <h5 className="modal-title">{datos.props.house.description.split("-")[0]}</h5>
                            <button onClick={() => datos.setmodal({ id: datos.id, modal: false })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body"  >
                            <p>Califica..</p>
                        </div>
                        <div name="score" onChange={handleChange}>
                            <Puntuacion></Puntuacion>
                        </div>
                        <input autoComplete="off" placeholder='Comenta aqui' style={{ width: "90%" }} type="text" name='comment' onChange={handleChange} className="regular style form-control" />

                        <div className="modal-footer">
                            <button onClick={() => datos.setmodal({ id: datos.id, modal: false })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button onClick={() => loadDelete(datos.props, form)} type="button" className="btn btn-success">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalComentar