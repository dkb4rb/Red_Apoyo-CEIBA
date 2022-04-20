import axios from 'axios';
import React from 'react'

import Cookies from 'universal-cookie';


function NewPeople(id_house, status) {
    const cookie = new Cookies()
    const DbUrl = "https://isnft-prod.azurewebsites.net/api/people";

    let idowner = cookie.get("id_usr_tok");
    const DeleteUrl = `${DbUrl}/${id_house}`;

    const heade = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idowner}`
    }

    axios
       .put(DbUrl, {
        "birthday": "18-06-1999",
        "cityId": 23,
        "lastName": "Perez",
        "name": "andrew",
        "phone": "21324353"
      },{headers: heade})
     .then((response) => {
            console.log(response)
            return 0;
        })
        .catch((err) => {
            console.log(err)
            return 1;
        })
}

export default NewPeople;