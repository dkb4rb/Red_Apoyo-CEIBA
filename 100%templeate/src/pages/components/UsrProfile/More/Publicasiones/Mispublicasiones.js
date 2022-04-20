import React, { useEffect, useState } from 'react'
import MisPublicasiones from './MisPublicasiones';
import NoLeases from "../../../../../assets/img/NoLeases.png"
import Message from '../../../Error/Message';
import axios from 'axios';
import "./../More.css"
import "./Mispublicasiones.css"
import Loader from '../../../Loader/Loader';

const urldb = `https://isnft-prod.azurewebsites.net/api/users/${localStorage.getItem('id_usr')}`

const Mispublicasiones = ({ setdat }) => {
    const [leases, setleases] = useState({ leases: false })
    const [info, setinfo] = useState([{ load: true }])
    const [mrinfo, setmrinfo] = useState(false);
    const [loader, setloader] = useState(false);


    useEffect(() => {
        setloader(true);
        axios
            .get(urldb)
            .then(res => {

                if (res.data.person.houses.length > 0) {
                    setinfo({ dtusrrr: res.data.person, load: false });
                    setdat(res.data.person);
                    if (info) {
                        setmrinfo(true);
                    }
                    setloader(false);
                } else {
                    setleases({
                        leases: true
                    })
                    setloader(false);
                }
            })
            .catch((err) => {
                setleases({
                    leases: true
                })
                setloader(false);
            })
            ;
    }, []);


    return (
        <div className='container_info'>
            {info.load && <Loader />}
            {mrinfo && <MisPublicasiones dataausr={info.dtusrrr} />}
            {leases.leases && <Message Mensaje={"Aun No tienes Publicasiones"}>
                <button type='button' className='btn btn-secondary' onClick={() => window.location.href = '/Public'}>Crear Publicasion </button><br></br>
                <img className='no_leases' alt='No_rents' src={NoLeases}></img>
            </Message>}
            {loader && <Loader />}
        </div>
    )
}


export default Mispublicasiones; 