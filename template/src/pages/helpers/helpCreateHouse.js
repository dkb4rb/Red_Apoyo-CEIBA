import { helpHttp } from "./helpHttp";
import axios from "axios";

const DbUrl="http://localhost:3002/Houses";



const CreateHouse = (data, setErr, setForm, setLoading) => {
    
    //console.log(data.id);
    
    data.id = Date.now();   
    axios({
        method:'POST',
        url:DbUrl,
        data:data
    }).then(res => console.log(res.data));
}
export default CreateHouse;