import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'

import axios from 'axios';
//import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl = "http://localhost:3002/usuarios";
const cookies = new Cookies();

class Login extends Component {
    state = {
        form: {
            username: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion = async () => {
        await axios.get(baseUrl, { params: { username: this.state.form.username, password: this.state.form.password } })
            .then(response => {
                return response.data;
            })
            .then(response => {
                if (response.length > 0) {
                    var respuesta = response[0];
                    cookies.set('id', respuesta.id, { path: "/" });
                    cookies.set('apellido', respuesta.apellido, { path: "/" });
                    cookies.set('nombre', respuesta.nombre, { path: "/" });
                    cookies.set('username', respuesta.username, { path: "/" });
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);
                    window.location.href = "./menu";
                } else {
                    alert('El usuario o la contraseña no son correctos');
                }
            })
            .catch(error => {
                console.log(error);
            })

    }

    componentDidMount() {
        if (cookies.get('username')) {
            window.location.href = "./menu";
        }
    }


    render() {
        return (
            <div className="containerPrincipal">
                <div className='icon_login'>
                </div>
                <div className="containerSecundario">
                    <div className="form-group2" >
                        <br />
                        <div className="In_puts2">
                            <label>Usuario</label>
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={this.handleChange}
                            />

                        </div>
                        <div className="In_puts2">

                            <label>Contraseña</label>
                            <br />

                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={this.handleChange}
                            />
                            <br />
                        </div>
                        <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>Iniciar Sesión</button>
                        <br />
                        <br />
                        <div>
                            <a href='./Registro'> Crear Cuenta</a>
                            <br />
                            <a href='./Forgot_Pass'> Olvide mi contraseña </a>

                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;