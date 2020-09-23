import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Homepage from "./containers/Homepage/Homepage"
import { Route,Switch} from "react-router-dom";
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Aux from './hoc/Auxilary'
import AboutUs from "./containers/About_us/AboutUs";


class App extends Component {
  render() {
  return (
    <Aux>
      <Layout>
        <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Homepage} />
       </Switch>
      </Layout>
      </Aux>
  );
}}

export default App;
