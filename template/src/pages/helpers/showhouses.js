import React from "react";
import { helpHttp } from "./helpHttp";
import Exist from "../components/Messages/Exist/Exist";
import { Form } from "reactstrap";
import axios from "axios";

const DbUrl="http://localhost:3002/Houses";
let api = helpHttp();

const showhouses = (data, setErr, setForm, setLoading) => {
    
    //console.log(data.id);
    let data_houses = {};
      
    axios({
        method:'GET',
        url:DbUrl
    }).then(res => {
        data_houses = res.data;
        console.log(data_houses);
        return data_houses;
    }); 
}
export default showhouses;