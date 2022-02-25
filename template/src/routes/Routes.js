import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/components/Home/Home'
import Login from '../pages/components/Login/Login';
import Menu from '../pages/components/Menu/Menu';
import products from '../pages/components/products/products';
import Resgistro from '../pages/components/Registro/Registro';

function Routes() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/Registro" component={Resgistro}/>
        <Route exact path="/Products" component={products}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
