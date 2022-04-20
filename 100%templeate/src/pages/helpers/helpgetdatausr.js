import axios from "axios";

export default function getUserData(id_user, setdata) {
    const url = "https://isnft-prod.azurewebsites.net/api/users"
    console.log(id_user);
    axios
    .get(url)
    .then((resp) => {
        console.log(resp.data.result)
        for (let index = 0; index < resp.data.result.length; index++) {
            const element = resp.data.result[index];
            if(element.person.id === id_user){
                window.location.href = `/usrprofilepublic/${element.id}`
            }
        }
    })
    .catch((err) => console.log(err))

}