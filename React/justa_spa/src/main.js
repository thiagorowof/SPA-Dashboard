import React, { Component } from "react";
import {
    Route,
    HashRouter
  } from "react-router-dom";
import Dashboard from "./components/screens/dashboard";
import Clientes from "./components/screens/clientes";
import AppHeader from "./components/header";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <AppHeader/>
          <div className="content">
            <Route exact path="/" component={Dashboard}/>
            <Route path="/clientes" component={Clientes}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;