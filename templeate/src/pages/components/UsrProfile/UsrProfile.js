import React, { Component, useEffect } from 'react'
import Cookies from 'universal-cookie'
import "./UsrProfile.css"
import UsrProfiles from './UsrProfiles'
import Headerns from '../Header/Headerns'
import Loader from '../Loader/Loader'
import Message from '../Error/Message'
import Footer from '../Footer/Footer'
import axios from 'axios'
const cookies = new Cookies()
const urldb = `https://isnft-prod.azurewebsites.net/api/users/${localStorage.getItem('id_usr')}`


class UsrProfile extends Component {
    state = {
        dtusr: [],
        load: false
    }

    componentDidMount() {
        axios.get(urldb).then(res => {
            //console.log("VIene la data");
            //console.log(res.data.result);
            this.setState({ dtusr: res.data, load: false });
            console.log("se monto el componente");
            console.log(res.data);
        });
    }


    render() {

        return (

            <div className='container_menu'>
                <div>
                    <Headerns
                        //manage_states={manage_states} 
                        username={localStorage.getItem("name_usr")} />
                </div>
                <br />
                <br />
                <div>
                    <div className='Sections'>
                        <div className='container_profile_usr'>
                            {this.state.load && (<><div className="load_all_houses"><Loader /><Message Mensaje={"Buscaremos por ti...."} ></Message></div></>)}
                            <UsrProfiles />
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>


        )
    }
}
export default UsrProfile;