import axios from "axios"
const DbUrl2="https://isnft-prod.azurewebsites.net/api/houses";

export const gethouses = ({setdb}) => {
    console.log("gethouses")
    axios
    .get(DbUrl2)
    .then((res) =>{
        setdb(res.data.result)
    })
    .catch((err)=>console.log(err));
}