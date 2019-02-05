import React, { Component } from "react";
import {
    Route,
    HashRouter
  } from "react-router-dom";
import Dashboard from "./dashboard";
import Clientes from "./clientes";
import AppHeader from "./components/styledHeader";

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