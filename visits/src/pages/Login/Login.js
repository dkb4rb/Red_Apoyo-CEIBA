import React from "react";
import './Login.css'
import Title from './components/Title/Title'
import Label from './components/Label/Label'
import Input from './components/Input/Input'
import Buttom from './components/Buttom/Buttom'

const Login = () => {

    
    function Error_H(name, value){
        if(name === 'usuario'){
            
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
                placeholder:'Ingrese su Usuario'

            }}
            />
            <Label texto='Contraseña'/>
            <Input atributo={{
                id:'password',
                name:'password',
                type:'password',
                placeholder:'Ingrese su Contraseña'

            }}/>
            <Buttom />
            
        </div>
    )
};
export default Login;