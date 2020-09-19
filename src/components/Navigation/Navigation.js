import React from "react";
import {Nav, Navbar } from "react-bootstrap";
import classes from "./Navigation.module.css";
import Logo from '../Logo/logo_symbol.png'

const navigation = (props) => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className={classes.background + " " + classes.margin_set}
    >
      <Navbar.Brand href="#home"><img src={Logo} className={classes.logo} alt="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className={classes.nav_link}>
            Pictures
          </Nav.Link>
          <Nav.Link href="/" className={classes.nav_link}>
            About Us
          </Nav.Link>
          <Nav.Link href="/" className={classes.nav_link}>
            Contact Us
          </Nav.Link>
          <Nav.Link href="login" className={classes.nav_link}>
            Login
          </Nav.Link>
          <Nav.Link href="signup" className={classes.nav_link}>
            Sign Up
          </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navigation;
