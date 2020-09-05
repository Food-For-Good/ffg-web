import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import classes from "./Navigation.module.css";

const navigation = (props) => {
  return (
    <Navbar
      variant="light"
      expand="lg"
      className={classes.background + " " + classes.margin_set}
    >
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className={classes.nav_link}>
            Pictures
          </Nav.Link>
          <Nav.Link href="#link" className={classes.nav_link}>
            About Us
          </Nav.Link>
          <Nav.Link href="#home" className={classes.nav_link}>
            Contact Us
          </Nav.Link>
          <Nav.Link href="#link" className={classes.nav_link}>
            Login
          </Nav.Link>
          <Button variant="outline-primary" className={classes.signUp}>
            Sign Up
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navigation;
