import Cookies from "universal-cookie";

const cookies = new Cookies();

export function cerrarSesion() {
    cookies.remove('id_usr_tok', { path: "/" });
    window.location.href = '/';
}