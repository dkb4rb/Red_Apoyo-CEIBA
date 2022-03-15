import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login/Login';
import products from '../pages/products/products';
import Resgistro from '../pages/Registro/Registro';

import Search_House from "../pages/Search_House/Search_House";
import Calificacion_Estadia from "../pages/Calificacion/Estadia";
import Calificacion_Huesped from "../pages/Calificacion/Huesped";
import Layout from "../pages/components/Layout/Layout"


function Routes() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/menu" component={Layout}/>
        <Route exact path="/Registro" component={Resgistro}/>
        <Route exact path="/Products" component={products}/>
        
        <Route exact path={"/Search_House"} component={Search_House} />
        <Route exact path={"/Calificacion_Estadia"} component={Calificacion_Estadia} />
        <Route exact path={"/Calificacion_Huesped"} component={Calificacion_Huesped} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
