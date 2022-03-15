import Cookies from "universal-cookie";

const cookies = new Cookies();

export function cerrarSesion() {
    cookies.remove('id', { path: "/" });
    cookies.remove('apellido_paterno', { path: "/" });
    cookies.remove('apellido_materno', { path: "/" });
    cookies.remove('nombre', { path: "/" });
    cookies.remove('username', { path: "/" });
    window.location.href = './';
}