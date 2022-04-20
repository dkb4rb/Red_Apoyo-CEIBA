import axios from "axios";
import Cookies from "universal-cookie";

/**
 * This function send new request lease to user public
 */

export default function LeaseHouse(form){
    const cookie = new Cookies()
    const urlleases = "https://isnft-prod.azurewebsites.net/api/leases"


    let idowner = cookie.get("id_usr_tok");
    const heade = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idowner}`
    }
  
   axios.post(urlleases, form, { 
          headers:heade
      })
      .then((resp) => console.clear())
      .catch((err) => console.log(err))
}