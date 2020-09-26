import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Homepage from "./containers/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Aux from "./hoc/Auxilary";
import * as ROUTES from "./constants/routes";
import AboutUs from "./containers/About_us/AboutUs";
import Pictures from "./components/Pictures/index";
import Password_forget from "./components/Password_forget/index";

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Switch>
            <Route path={ROUTES.SIGN_UP} component={Signup} />
            <Route path={ROUTES.ABOUT_US} component={AboutUs} />
            <Route path={ROUTES.PICTURES} component={Pictures} />
            <Route path={ROUTES.LOG_IN} component={Login} />
            <Route path={ROUTES.PASSWORD_FORGET} component={Password_forget} />
            <Route path={ROUTES.HOME} component={Homepage} />
          </Switch>
        </Layout>
      </Aux>
    );
  }
}

export default App;
