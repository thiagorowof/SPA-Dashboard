import React, { Component } from "react";
import {
    NavLink,
  } from "react-router-dom";
import logo from '../assets/img/logo.png'; 
import MdPeople from 'react-ionicons/lib/MdPeople'
import MdAnalytics from 'react-ionicons/lib/MdAnalytics'


class AppHeader extends Component {
    render() {
      return (
        <ul className="header">
            <img src={logo} alt="" />
            <li><NavLink exact to="/"><MdAnalytics className="" color="#ffffff"/> Dashboard</NavLink></li>
            <li><NavLink to="/clientes"><MdPeople className="" color="#ffffff"/> Clientes</NavLink></li>
        </ul>
        );
    }
  }


export default AppHeader;