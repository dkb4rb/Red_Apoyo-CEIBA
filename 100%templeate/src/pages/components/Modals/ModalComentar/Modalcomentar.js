import { Component } from "react";
import "../Modals.css"
import ModalComentar from "./ModalComentar";
/**
 * Use this modal reser in the hooks
 * Declare Hook 
 * cont [Modal, setModal] = useState([])
 *
 * {
 *  modal.modal && <Modalreserva props ={datmodal.datos_modal}  setmodal={setmodal} ></Modalreserva>
 * }
 * 
 */

export default class Modalcomentar extends Component {


    constructor(props, setmodal) {
        super(props);

    }
    render() {
        return (
            <>
                <div className="container_modal">
                    <ModalComentar datos={this.props} />
                </div>
            </>
        );
    }
}