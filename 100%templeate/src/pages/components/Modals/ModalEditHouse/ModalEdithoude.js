import { Component } from "react";
import "../Modals.css"
import ModalEditHouse from "./ModalEdithouse";


export class ModalEdithouse extends Component {


    constructor(props, setmodal) {
        super(props);

    }
    render() {
        return (
            <>
                <div className="container_modal">
                    <ModalEditHouse datos={this.props} />
                </div>
            </>
        );
    }
}