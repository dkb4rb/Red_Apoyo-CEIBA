import Cookies from 'universal-cookie';

const cookies = new Cookies();

function ComponentDidMount () {

    if (cookies.get('username')) {
        window.location.href = "./menu";
    };
}

export default ComponentDidMount;