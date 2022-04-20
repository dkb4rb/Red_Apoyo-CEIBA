import axios from 'axios';
import React from 'react'

import Cookies from 'universal-cookie';

/**
 * This function Acept the request to user to lease one public
 */


function AceptLease(id_lease, approve) {
    const cookie = new Cookies()
    const db = `https://isnft-prod.azurewebsites.net/api/leases/approval/${id_lease}?isApproved=${approve}`

    let idowner = cookie.get("id_usr_tok");

    const heade = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idowner}`
    }

     axios
     .put(db,{isApproved: approve } ,{
         
          headers:heade
    })
     .then((response) => {
            console.log(response)
            console.log("Solicitud aprovada")
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
            console.log("Solicitud Rechazada")
        })
}

export default AceptLease;