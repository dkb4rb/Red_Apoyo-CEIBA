import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Profile.css"

import Profilers from "./Profilers";
import Headerns from "../Header/Headerns";
import Footer from "../Footer/Footer";

const cookies = new Cookies()
export default class Profile extends Component {
  state = {
    Houses: [],
    load: true
  }

  componentDidMount() {
    if (!cookies.get('id_usr_tok')) {
      window.location.href = "/";
    }
    const id_house = window.location.pathname.split("/")[2]
    const DbUrl = `https://isnft-prod.azurewebsites.net/api/houses/${id_house}`;
    console.log(DbUrl)
    axios
      .get(DbUrl)
      .then(res => {
        this.setState({ Houses: res.data, load: false });
      });
  }

  render() {
    return (
      <>
        <div className="container_menu">
          <div>
            <Headerns
              //manage_states={manage_states}
              username={localStorage.getItem("name_usr")}
            />
          </div>
          <br />
          <br />
          <div>
            <div className="Sections">
              <Profilers profile_Data={this.state.Houses} />
            </div>
          </div>
          <div></div>
          <div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
