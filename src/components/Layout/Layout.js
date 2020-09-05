import React from "react";
import Aux from "../../hoc/Auxilary";
import Navigation from "../Navigation/Navigation";

const layout = (props) => (
  <Aux>
    <Navigation />

    <main>{props.children}</main>
  </Aux>
);

export default layout;
