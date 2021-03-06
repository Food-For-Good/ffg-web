import React from "react";
import Navigation from "../Navigation/Navigation";
import classes from "./Layout.module.css";

const layout = (props) => (
  <div className={classes.bg}>
    <Navigation />
    <main>{props.children}</main>
  </div>
);

export default layout;
