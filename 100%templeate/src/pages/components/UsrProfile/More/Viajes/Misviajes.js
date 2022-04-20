import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./../More.css"
import NoLeases from "../../../../../assets/img/NoLeases.png"
import Loader from '../../../Loader/Loader';
import Message from '../../../Error/Message';
import MisViajes from './MisViajes';

const urldb = `https://isnft-prod.azurewebsites.net/api/people/traveler-leases/${localStorage.getItem('ownerID')}`

const Misviajes = ({ setdat }) => {
    // eslint-disable-next-line
    const [info, setinfo] = useState([{ load: true }])
    const [leasess, setleasess] = useState({ leasess: false })
    const [mrinfo, setmrinfo] = useState(false);
    const [loader, setloader] = useState(false);

    useEffect(() => {
        setloader(true);
        axios
            .get(urldb)
            .then(res => {
                if (res.data.leases.length > 0) {
                    setinfo({ dtusrrr: res.data, load: false });
                    setdat(res.data);
                    if (info) {
                        setmrinfo(true);
                    }
                    setloader(false);
                }
                if (res.data.leases.length === 0) {
                    setinfo({ dtusrrr: res.data, load: false });
                    setdat(res.data);
                    if (info) {
                        setmrinfo(true);
                    }

                    setleasess({
                        leasess: true
                    })
                    setloader(false);
                } else {
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
    }, []);


    return (
        <div className='container_info'>
            {info.load && <Loader />}
            {mrinfo && <MisViajes dataausr={info.dtusrrr} />}
            {leasess.leasess && <Message Mensaje={"Aun No tienes Viajes"}>

                <img className='no_leases' alt='No_rents' src={NoLeases}></img>
            </Message>}
            {loader && <Loader />}
        </div>
    )
}


export default Misviajes; 