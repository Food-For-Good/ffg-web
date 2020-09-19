import React from "react";
import Aux from "../../../../hoc/Auxilary";
import classes from "./Feature.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

const feature = (props) => {
  let classes_for_icon = "fa fa-4x " + props.icon_name + " " + classes.icon;

  return (
    <Aux>
      <div className={["col-lg-4", classes.featureBox].join(" ")}>
        <i className={classes_for_icon}></i>
        <h3 className={classes.featureTitle}>{props.title}</h3>
        <p className={classes.description}>{props.description}</p>
      </div>
    </Aux>
  );
};

export default feature;
