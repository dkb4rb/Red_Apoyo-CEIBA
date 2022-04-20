import React, { useState } from 'react'
import Rent from "../../../assets/img/Public/Rent.png"
import Loader from '../Loader/Loader'
import InputN from '../Input/InputN';
import Input from '../Input/Input';
import InputCheck from '../InputCheck/InputCheck';
import InputImg from '../InputImg/InputImg';
import Selecct from '../Select/Select';
import SelectLi from '../Select/SelectLi';
import Title from '../Title/Title'
import "./EditHouse.css"


function public_house(form, setForm, setPublicar, Publica, setLoad) {
    // CreateHouse(form, setErr, setForm, location);
    //console.log(location)
    setLoad(true);
    setTimeout(() => {
        setLoad(false);
    }, 2000);
}

const EditHouses = ({ data }) => {
    const [Load, setLoad] = useState(false);
    const [form, setForm] = useState([]);
    const [Publica, setPublicar] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.email || !form.userName || !form.password || !form.name || !form.lastName || !form.phone || !form.phone) {
            alert("Completa todos los campos");
        }
    };
    const handleChange = async (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='container_form_edit'>
            <div className="container_publicar">
                <div className="Load_p">

                    {Load && <Loader />}

                </div>
                <div className="Formulario_inputs">
                    <Title title={"Edit House"} />
                    <div className="rent2">
                        <img src={Rent} alt="Rentar_Hogar"></img>
                    </div>

                    <form onSubmit={handleSubmit} className="form_dist">
                        <div className="rent">
                            <img src={Rent} alt="Rentar_Hogar"></img>
                        </div>
                        <div>
                            <div className="In_puts">
                                <Input
                                    atributo={{
                                        id: "name_pub",
                                        name: "name_pub",
                                        type: "text",
                                        placeholder: "Nombra Tu Publicacion",
                                        onChange: handleChange,
                                    }}
                                />
                                <br></br>
                            </div>
                            <div className="In_puts" onChange={handleChange}>
                                <Input
                                    atributo={{
                                        id: "precio",
                                        name: "price",
                                        type: "text",
                                        placeholder: "Costo por noche",
                                        onChange: handleChange,
                                    }}
                                />

                                <br />
                                <br />
                            </div>
                            <div className="locationss">
                                <div className="In_puts" onChange={handleChange}>
                                    <Selecct
                                        atributos={{
                                            id: "Country",
                                            name: "countyId",
                                            placeholder: "Country",
                                        }}
                                    ></Selecct>
                                    <br></br>
                                </div>

                                <div className="In_puts" onChange={handleChange}>
                                    <SelectLi
                                        atributos={{
                                            id: "Citi",
                                            name: "citiId",
                                            placeholder: "City",
                                        }}
                                    ></SelectLi>
                                    <br></br>
                                </div>
                            </div>

                            <div className="In_puts" onChange={handleChange}>
                                <InputCheck
                                    form={form}
                                    handleChange={handleChange}
                                    setForm={setForm}
                                />
                                <br />
                                <br />
                            </div>
                        </div>

                        <div>
                            <div className="In_puts">
                                <Input
                                    atributo={{
                                        id: "address",
                                        name: "direction",
                                        type: "text",
                                        placeholder: "Direccion",
                                        onChange: handleChange,
                                    }}
                                />
                                <br></br>
                            </div>
                            <div className="In_puts">
                                <InputN
                                    atributo={{
                                        id: "rooms",
                                        name: "rooms",
                                        type: "number",
                                        placeholder: "Habitaciones Disponibles",
                                        onChange: handleChange,
                                    }}
                                />
                                <br></br>
                            </div>
                            <div className="In_puts">
                                <InputN
                                    atributo={{
                                        id: "Bathrooms",
                                        name: "Bathrooms",
                                        type: "number",
                                        placeholder: "Baños Disponibles",
                                        onChange: handleChange,
                                    }}
                                />
                                <br></br>
                            </div>
                            <div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Inserta tus Fotos
                                    </label>
                                    <div onChange={handleChange}><InputImg /></div>
                                </div>

                                <br></br>
                            </div>
                        </div>
                    </form>
                    <div className="buttons">
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                public_house(form, setForm, setPublicar, Publica, setLoad)
                            }
                        >
                            Edit Publicacion
                        </button>
                    </div>
                    <br></br>
                </div>
            </div>

        </div>
    )
}

export default EditHouses