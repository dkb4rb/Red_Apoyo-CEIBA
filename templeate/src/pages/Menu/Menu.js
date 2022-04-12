import axios from 'axios';
import React, { Component} from 'react';
import Cookies from 'universal-cookie';
import Carousel from '../components/Carousel/Carousel';
import Pagination from '../components/Pagination/Pagination';

import './Menu.css'

const cookies = new Cookies();


class Menu extends Component {

    componentDidMount() {
        if (!cookies.get("id_usr_tok")) {
               window.location.href = "./";
            }
        const lstorage = localStorage.getItem("mail_ctrl_usr");
        axios
        .get("https://isnft-prod.azurewebsites.net/api/users")
        .then((res) =>{
            const data = res.data.result;

            for (let index = 0; index < data.length; index++) {
                if (lstorage === data[index].email) {
                    localStorage.setItem("id_usr", data[index].id)
                    localStorage.setItem("data_person", JSON.stringify(data));
                }
            }
        })
        .catch((err) => console.log(err))
        }

    render() {

        return (
            <div className='container_menu'>

                <div>
                    <div className="container_carousel_principal">

                        <div className='container' style={{margin: "auto"}}>

                            <div className='row'>
                                <Carousel />
                                <div className='col'>
                                    <Carousel />
                                </div>
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Menu;