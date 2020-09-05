import React, { Component } from "react";
import Feature from "./Feature/Feature";
import classes from "./Features.module.css";

class Features extends Component {
  render() {
    let classes_applied = [
      classes.brown_section,
      classes.container_fluid,
      classes.features,
    ];
    return (
      <div className={classes_applied.join(" ")}>
        <div className="row">
          <Feature
            icon_name={"fa-check-circle"}
            title={"Sed finibus"}
            description={"Fusce scelerisque eros a dignissim pellentesque"}
          />
          <Feature
            icon_name={"fa-bullseye"}
            title={"Sed finibus"}
            description={"Fusce scelerisque eros a dignissim pellentesque"}
          />
          <Feature
            icon_name={"fa-heart"}
            title={"Sed finibus"}
            description={"Fusce scelerisque eros a dignissim pellentesque"}
          />
        </div>
      </div>
    );
  }
}

export default Features;
