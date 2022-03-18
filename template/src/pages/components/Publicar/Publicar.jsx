import React from "react";

import Input from '../Input/Input';
import Title from "../Title/Title";
import axios from "axios";
import './Publicar.css'

import CreateHouse from "../../helpers/helpCreateHouse";

const DbUrl="http://localhost:3002/Houses";    

const Publicar = ({ handleSubmit, handleChange,  setLoading, setForm, setErr, form, page_name }) => {



    return (
        <div className="container_publicar">
            <div className="Formulario_inputs">

                <Title title={page_name} />


                <form onSubmit={handleSubmit}>
                
                <div className="In_puts">
                        <Input atributo={{
                            id: 'name_pub',
                            name: 'nombre',
                            type: 'text',
                            placeholder: 'Nombra Tu Publicacion',
                            onChange: handleChange

                        }}

                        /><br></br>
                    </div>

                    <div className="In_puts">
                        <Input atributo={{
                            id: 'status',
                            name: 'Estado',
                            type: 'number',
                            placeholder: 'Disponibilidad',
                            onChange: handleChange

                        }}

                        /><br></br>
                    </div>
                    <div className="In_puts" >

                        <Input atributo={{
                            id: 'Contact',
                            name: 'Telefono',
                            type: 'tel',
                            placeholder: 'Telefono',
                            onChange: handleChange

                        }}
                        /><br></br>
                    </div>
                    <div className="In_puts">
                        <Input atributo={{
                            id: 'pais',
                            name: 'Pais',
                            type: 'text',
                            placeholder: 'Pais',
                            onChange: handleChange

                        }}
                        />
                        <br />
                        <br />
                    </div>

                    <div className="In_puts" >
                        <Input atributo={{
                            id: 'City',
                            name: 'Ciudad',
                            type: 'text',
                            placeholder: 'Ciudad',
                            onChange: handleChange

                        }}
                        /><br></br>

                    </div>

                    <div className="In_puts" >
                        <Input atributo={{
                            id: 'address',
                            name: 'Direccion',
                            type: 'text',
                            placeholder: 'Direccion',
                            onChange: handleChange

                        }}
                        /><br></br>

                    </div>
                    <div className="In_puts" >
                        <Input atributo={{
                            id: 'rooms',
                            name: 'Habitaciones',
                            type: 'number',
                            placeholder: 'Habitaciones Disponibles',
                            onChange: handleChange

                        }}
                        /><br></br>

                    </div>
                    <div className="In_puts" >
                        <Input atributo={{
                            id: 'Bathrooms',
                            name: 'Baños',
                            type: 'number',
                            placeholder: 'Baños Disponibles',
                            onChange: handleChange

                        }}
                        /><br></br>

                    </div>

                    <div className="buttons">
                        <button
                            className="btn btn-primary"
                            onClick={() => CreateHouse(form, setErr, setForm)}>Publicar
                        </button>
                    </div>



                </form>
            </div>

        </div>
    );
}

export default Publicar;