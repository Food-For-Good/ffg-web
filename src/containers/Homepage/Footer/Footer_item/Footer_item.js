import React from "react";
import classes from "./Footer_item.module.css";

const footer_item = (props) => {
  return (
    <li className={classes.footer_list_item}>
      <i className={classes.social_icon + " " + props.icon_name}></i>
    </li>
  );
};

export default footer_item;
