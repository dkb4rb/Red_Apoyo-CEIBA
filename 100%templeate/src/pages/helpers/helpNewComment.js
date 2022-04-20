import axios from 'axios';
import Cookies from 'universal-cookie';

/**
 * This function send new comment what user host or traveller the cookies verfic the values
 */
function NewComment(id_lease, comment, score) {
    const cookie = new Cookies()
    const DbUrl = `https://isnft-prod.azurewebsites.net/api/leases/score/${id_lease}`;

    let idowner = cookie.get("id_usr_tok");


    const heade = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idowner}`
    }

    axios
        .put(DbUrl, {
            "comment": comment,
            "score": score
        }, {
            headers: heade
        }
        )
        .then((response) => {
            console.log(response)
            window.location.reload()
            return 0;
        })
        .catch((err) => {
            console.log(err)
            return 1;
        })
}

export default NewComment;