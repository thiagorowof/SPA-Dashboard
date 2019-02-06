import React, { Component } from "react";
import {
    NavLink,
  } from "react-router-dom";
import logo from '../assets/img/logo.png';
import nasaLogo from '../assets/img/nasa.png'; 
import MdPeople from 'react-ionicons/lib/MdPeople'
import MdAnalytics from 'react-ionicons/lib/MdAnalytics'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'



class AppHeader extends Component {
    render() {
      return (

        <Navbar collapseOnSelect expand="lg" className="header headerNav">
          <Navbar.Brand href="#home">
              <img alt="" src={logo} className="d-inline-block align-top"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/"><MdAnalytics className="" color="#ffffff"/> Dashboard</NavLink>
              <NavLink to="/clientes"><MdPeople className="" color="#ffffff"/> Clientes</NavLink>
            </Nav>
            <Nav>
            <Image width={40} height={40} src={nasaLogo} roundedCircle/>
              <NavDropdown title="Justo Top" id="collasible-nav-dropdown">
                <NavDropdown.Item >Action</NavDropdown.Item>
                <NavDropdown.Item >Another action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        );
    }
  }



export default AppHeader;




