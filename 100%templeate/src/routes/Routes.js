import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Resgistro from '../pages/Registro/Registro';
import Profile from '../pages/components/Profile/Profile';
import Layout from "../pages/components/Layout/Layout"
import UsrProfile from '../pages/components/UsrProfile/UsrProfile';
import EditHouse from '../pages/components/EditHouse/EditHouse';
import EditUsr from '../pages/components/EditUsr/EditUsr';
import Error404head from '../pages/components/Error/Error404head';
import UsrProfilesPublic from '../pages/components/UsrProfilePublic/UsrProfilePublic';

function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Registro" component={Resgistro} />
        <Route exact path="/menu" component={Layout} />
        <Route exact path="/Products" component={Layout} />
        <Route exact path="/Public" component={Layout} />
        <Route exact path="/MapView" component={Layout} />

        <Route exact path="/Products/:id" component={Profile} />
        <Route exact path="/usrprofile/:id" component={UsrProfile} />
        <Route exact path="/usrprofilepublic/:id" component={UsrProfilesPublic} />
        <Route exact path="/EditHouse/:id" component={EditHouse} />
        <Route exact path="/EditUsr/:id" component={EditUsr} />

        <Route path={"*"} component={Error404head} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
