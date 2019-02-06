import React, { Component } from "react";
import {
    Route,
    HashRouter
  } from "react-router-dom";
import Dashboard from "./components/screens/Dashboard";
import Clients from "./components/screens/Clients";
import AppHeader from "./components/Header";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <AppHeader/>
          <div className="content">
            <Route exact path="/" component={Dashboard}/>
            <Route path="/clients" component={Clients}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;