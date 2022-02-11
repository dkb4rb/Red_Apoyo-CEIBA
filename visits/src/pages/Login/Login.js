import React from "react";
import './Login.css'
import Title from './components/Title/Title'
import Label from './components/Label/Label'
import Input from './components/Input/Input'
import Buttom from './components/Buttom/Buttom'

const Login = () => {
    return (
        <div className="Login">
            <Title />
            <Label texto='Usuario'/>
            <Input />
            <Label texto='Contraseña'/>
            <Input />
            <Buttom />
            
        </div>
    )
};
export default Login;