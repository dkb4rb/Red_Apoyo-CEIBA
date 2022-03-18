import axios from "axios";
import React, { Component , useState , useEffect} from "react";
import Houses from "./Houses/Houses";
import './Hous.css'

const DbUrl="http://localhost:3002/Houses";
const DbUrl2="https://isnft-prod.azurewebsites.net/api/houses";


export default class Hous extends Component {

    
    state = {
        Houses: []
    }

    componentDidMount(){
        axios.get(DbUrl).then(res =>{
            //console.log("VIene la data");
            //console.log(res.data.result);
            this.setState({Houses : res.data});
        });
    }

    
    render(){
        
        return(
            <>
                <div className="Houses_Container">
                    <div className="Houses"> 
                        
                        <div>
                        <Houses houses={this.state.Houses}/>
                           
                        </div>
                        <br />
                        <br />
                        
                        <p>
                            Houses 
                        </p>
                    </div>
                </div>
            </>

        );
    }

} 