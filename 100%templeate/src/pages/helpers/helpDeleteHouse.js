import axios from 'axios';
import React from 'react'

import Cookies from 'universal-cookie';


function DeleteHouse(id_house, status) {
    const cookie = new Cookies()
    const DbUrl = "https://isnft-prod.azurewebsites.net/api/houses";

    let idowner = cookie.get("id_usr_tok");
    const DeleteUrl = `${DbUrl}/${id_house}`;

    const heade = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idowner}`
    }

    axios
    .delete(DeleteUrl, { headers: heade })
     .then((response) => {
            console.log(response);
            window.location.reload();
        })
        .catch((err) => {
            console.log(err)
        })
}

export default DeleteHouse;