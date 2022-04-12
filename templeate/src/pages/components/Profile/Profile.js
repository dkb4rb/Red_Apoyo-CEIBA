import React, { Component} from "react";
import axios from "axios";
import "./Profile.css"

import Profilers from "./Profilers";
import Headerns from "../Header/Headerns";
import Footer from "../Footer/Footer";
const DbUrl2 = "https://isnft-prod.azurewebsites.net/api/users";

export default class Profile extends Component {
  state = {
    Houses: [],
    load: true
}

componentDidMount() {
    axios.get(DbUrl2).then(res => {
        //console.log("VIene la data");
        //console.log(res.data.result);
        this.setState({ Houses: res.data, load: false });
        console.log("se monto el componente");
        console.log(res.data);
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
              <Profilers profile_Data={this.state.Profiles} />
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
