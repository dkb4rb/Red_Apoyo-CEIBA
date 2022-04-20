import axios from "axios";
import Cookies from "universal-cookie";

export default function GetLeases(){
    const cookie = new Cookies();

    const dbUrl =`https://isnft-prod.azurewebsites.net/api/people/host-leases/${localStorage.getItem('ownerID')}`
    console.log(dbUrl);

    const idowner = cookie.get("id_usr_tok");
    
    const heade = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idowner}`
    }

    axios
    .get(dbUrl)
    .then(
        (resp) =>{
            console.log(resp.data);
    })
    .catch(
        (err) =>{
            console.log(err)
            console.log("Aun no tienes arrendamientos como host")
        }
    )
}