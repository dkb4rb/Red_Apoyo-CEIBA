import React, { Component , useEffect, useState} from 'react'
import MoreInfo from '../MoreInfo';
import axios from 'axios';
import "./More.css"
import Loader from '../../../Loader/Loader';

const urldb = `https://isnft-prod.azurewebsites.net/api/users/${localStorage.getItem('id_usr')}`

function verydata(data) {
    if(data === null){
      console.log("la data no carga");
      
    }else{
      console.log("============= WIIIII RECIBIMOS LA DATA =============")
      console.log(data);
    }
  }

const Misfotos = ({setdat}) => {
    const [info, setinfo] = useState([{load:true}])
    const [mrinfo, setmrinfo] = useState(false);

    useEffect(()=> {
        axios
        .get(urldb)
        .then(res => {
            //console.log("VIene la data");
            //console.log(res.data.result);
            setinfo({ dtusrrr: res.data.person, load: false });
            setdat(res.data.person);
            if (info) {
                setmrinfo(true);         
            }
        });
    },[]);


    return (
        <div className='container_info'>
            {info.load && <Loader />}
            {mrinfo && <MoreInfo dataausr={info.dtusrrr}/>}
        </div>
    )
}


export default Misfotos; 