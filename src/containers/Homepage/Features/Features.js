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
            icon_name={"fa-list-ol"}
            title={"Request tracking "}
            description={"Live listings with real-time updates."}
          />
          <Feature
            icon_name={"fa-comments"}
            title={"Chat seamlessly"}
            description={"Inbuilt communication channel."}
          />
          <Feature
            icon_name={"fa-rss-square"}
            title={"Share your experience"}
            description={"Be a part of an amazing community with our community blogs."}
          />
        </div>
      </div>
    );
  }
}

export default Features;
