import Cookies from 'universal-cookie';

const cookies = new Cookies();

function ComponentDidMount () {

    if (cookies.get("id_usr_tok")) {
               window.location.href = "./menu";
    }
}

export default ComponentDidMount;