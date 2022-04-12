import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import login_icoon from '../../assets/img/CEIBA.png';

import axios from 'axios';
//import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl = "https://isnft-prod.azurewebsites.net/api/auth";
const cookies = new Cookies();

class Login extends Component {
    
    load = false;
    
    state = {
        form: {
            email: '',
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

    /** IniciarSesion() - This is one function what send method post the data of curse async 
     * Return: one promise with response 
     *  - Otherwise return error status
     */
    // Enviamos la data hacea nuestra url en methodo post si nuestro response
    // Contiene el token esto indica que nuestro usuario se encuentra registrado
    iniciarSesion = async () => {
        await axios
        .post(baseUrl, { email: this.state.form.email, password: this.state.form.password })
            .then(response => {
                var token = response.data;
                cookies.set('id_usr_tok', token.accessToken, {path: "/"});
                localStorage.setItem("mail_ctrl_usr", this.state.form.email);
                alert(`Bienvenido`);
                window.location.href="./menu";
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
    if (cookies.get("id_usr_tok")) {
           window.location.href = "./menu";
        }
    }


    render() {
        
        return (
            <div className="containerPrincipal">
                
                <img src={login_icoon} alt="logo" className='icon_login'>
                </img>
                <div className="containerSecundario">
                    <div className="form-group2" >
                        <br />
                        <div className="In_puts2">
                            <label>Usuario</label>
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                name="email"
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