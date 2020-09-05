import React, { Component } from "react";
import classes from "./Footer.module.css";
import FooterItem from "./Footer_item/Footer_item";

class Footer extends Component {
  render() {
    return (
      <div>
        <ul className={classes.footer_list}>
          <FooterItem icon_name={"fa fa-facebook-f"} />
          <FooterItem icon_name={" fa fa-twitter"} />
          <FooterItem icon_name={" fa fa-instagram"} />
          <FooterItem icon_name={" fa fa-envelope"} />
          <li>
            <p className={classes.p}>© Copyright 2020 FFG</p>{" "}
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
