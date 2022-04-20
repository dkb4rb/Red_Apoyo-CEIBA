import { Component } from "react";
import "../Modals.css"
import ModalPublicar from "./ModalPublicar"

export class Modalpublicar extends Component {


    constructor(props, setmodal) {
        super(props);

    }
    render() {
        return (
            <>
                <div className="container_modal">
                    <ModalPublicar datos={this.props} />
                </div>
            </>
        );
    }
}