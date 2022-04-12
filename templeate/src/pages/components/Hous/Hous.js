import axios from "axios";
import React, { Component } from "react";
import Houses from "./Houses/Houses";
import './Hous.css'
import Loader from "../Loader/Loader";
import Message from "../Error/Message";

const DbUrl2 = "https://isnft-prod.azurewebsites.net/api/houses";


export default class Hous extends Component {


    state = {
        Houses: [],
        load: true
    }

    componentDidMount() {
        axios.get(DbUrl2).then(res => {
            //console.log("VIene la data");
            //console.log(res.data.result);
            this.setState({ Houses: res.data, load: false });
            console.log("se monto el componente");
            console.log(res.data);
        });
    }


    render() {

        return (
            <>
                <div className="Houses_Container">
                    <div className="Houses">
                        
                            {this.state.load && (<><div className="load_all_houses"><Loader /><Message Mensaje={"Buscaremos por ti...."} ></Message>
                        </div></>)}

                        <div>
                            <Houses houses={this.state.Houses} />

                        </div>
                        <br />
                        <br />

                    </div>
                </div>
            </>

        );
    }

} 