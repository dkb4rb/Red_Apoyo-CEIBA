import React from "react";
import './Login.css'
import Title from './components/Title/Title'
import Label from './components/Label/Label'
import Input from './components/Input/Input'
import Buttom from './components/Buttom/Buttom'

const Login = () => {

    
    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                window.location.href="./menu";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    };

    componentDidMount(){
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }

    return (
        <div className="Login">
            <Title />
            <Label texto='Usuario'/>
            <Input atributo={{
                id:'usuario',
                name:'usuario',
                type:'text',
                placeholder:'Ingrese su Usuario',
                onChange={this.handleChange}

            }}
            />
            <Label texto='Contraseña'/>
            <Input atributo={{
                id:'password',
                name:'password',
                type:'password',
                placeholder:'Ingrese su Contraseña',
                onChange={this.handleChange}

            }}/>
            <Buttom />
            
        </div>
    )
};
export default Login;