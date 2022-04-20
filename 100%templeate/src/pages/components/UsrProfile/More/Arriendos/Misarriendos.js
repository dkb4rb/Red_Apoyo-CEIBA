import React, { Component , useEffect, useState} from 'react'
import axios from 'axios';
import "./../More.css"
import NoLeases from "../../../../../assets/img/NoLeases.png"
import Loader from '../../../Loader/Loader';
import MoreInfoLeases from './MoreInfoLeases';
import Message from '../../../Error/Message';

const urldb = `https://isnft-prod.azurewebsites.net/api/people/host-leases/${localStorage.getItem('ownerID')}`

function verydata(data) {
    if(data === null){
      console.log("la data no carga");
      
    }else{
      console.log("============= WIIIII RECIBIMOS LA DATA =============")
      console.log(data);
    }
  }

const Misarriendos = ({setdat}) => {
    const [info, setinfo] = useState([{load:true}])
    const [leasess, setleasess] = useState({leasess:false})
    const [mrinfo, setmrinfo] = useState(false);
    const [loader, setloader] = useState(false);

    useEffect(()=> {
        setloader(true);
        axios
        .get(urldb)
        .then(res => {
            //console.log("VIene la data");
            //console.log(res.data);
            if(res.data.leases.length > 0){
                setinfo({ dtusrrr: res.data, load: false });
                setdat(res.data);
                if (info) {
                    setmrinfo(true);         
                }
                setloader(false);
            }
            if(res.data.leases.length === 0){
                setinfo({ dtusrrr: res.data, load: false });
                setdat(res.data);
                if (info) {
                    setmrinfo(true);         
                }

                setleasess({
                    leasess: true
                })
                setloader(false);
            }else{
                setleasess({
                    leasess: false
                })
            }


        })
        .catch((err) => {
            setleasess({
                leasess: true
            })
            setloader(false);
        })
        ;
    },[]);


    return (
        <div className='container_info'>
            {info.load && <Loader />}
            {mrinfo && <MoreInfoLeases dataausr={info.dtusrrr}/> }
            {leasess.leasess && <Message Mensaje={"Aun No tienes Arriendos"}> 
                
                <img className='no_leases' alt='No_rents' src={NoLeases}></img>
            </Message>}
            {loader && <Loader />}
        </div>
    )
}


export default Misarriendos; 