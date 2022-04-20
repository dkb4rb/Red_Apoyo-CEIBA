import React, { Component } from 'react'
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
        if (!cookies.get('id_usr_tok')) {
            window.location.href = "/";
        }
        axios.get(urldb).then(res => {
            this.setState({ dtusr: res.data, load: false });
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
                <div className='foott_pub'>
                    <Footer />
                </div>
            </div>


        )
    }
}
export default UsrProfile;