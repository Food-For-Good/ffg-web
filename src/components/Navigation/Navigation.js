import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Dropdown, NavItem } from "react-bootstrap";
import classes from "./Navigation.module.css";
import Logo from "../Logo/logo_symbol.png";
import { AuthUserContext } from "../Session";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);
const NavigationNonAuth = () => (
  <Navbar
    variant="dark"
    expand="lg"
    className={classes.background + " " + classes.margin_set}
  >
    <Navbar.Brand href="/">
      <img src={Logo} className={classes.logo} alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link
          as={NavLink}
          to="/pictures"
          exact
          className={classes.nav_link + " " + classes.a}
        >
          Pictures
        </Nav.Link>
        <Nav.Link as={NavLink} to="/aboutus" exact className={classes.nav_link}>
          About Us
        </Nav.Link>
        <Nav.Link as={NavLink} to="/" exact className={classes.nav_link}>
          Contact Us
        </Nav.Link>
        <Nav.Link as={NavLink} to="login" exact className={classes.nav_link}>
          Login
        </Nav.Link>
        <Nav.Link as={NavLink} to="signup" exact className={classes.nav_link}>
          Sign Up
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const NavigationAuth = () => (
  <Navbar
    variant="dark"
    expand="lg"
    className={classes.background + " " + classes.margin_set}
  >
    <Navbar.Brand href="#home">
      <img src={Logo} className={classes.logo} alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link
          as={NavLink}
          to="/pictures"
          exact
          className={classes.nav_link + " " + classes.a}
        >
          Pictures
        </Nav.Link>
        <Nav.Link as={NavLink} to="/aboutus" exact className={classes.nav_link}>
          About Us
        </Nav.Link>
        <Nav.Link as={NavLink} to="/" exact className={classes.nav_link}>
          Contact Us
        </Nav.Link>
        <NavDropdown title="Hello User" className={classes.nav_link}>
          <NavDropdown.Item
            as={NavLink}
            exact
            to="/editprofile"
            className={
              classes.nav_link + " " + classes.hover + " " + classes.dropdown
            }
            style={{ margin: "5px 0px" }}
          >
            Edit Profile
          </NavDropdown.Item>
          <NavDropdown.Item
            as={NavLink}
            className={classes.nav_link + " " + classes.hover}
            exact
            to="logout"
            style={{ margin: "5px 0px" }}
          >
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default Navigation;
