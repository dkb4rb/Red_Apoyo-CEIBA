import axios from "axios"
import Cookies from "universal-cookie"

function GetTravelLeases(){
    const cookie = new Cookies()

    const idowner = cookie.get("id_usr_tok");
    const dburlleases = `https://isnft-prod.azurewebsites.net/api/people/traveler-leases/${localStorage.getItem("ownerId")}`

    const head = {
        'ContentType': 'application/json',
        'Authorization': `Bearer ${idowner}`
    }

    console.log(dburlleases);

}