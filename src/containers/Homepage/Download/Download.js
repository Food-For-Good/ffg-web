import React, { Component } from "react";
import classes from "./Download.module.css";
import iphone from "./iphone6.jpg";
class Download extends Component {
  render() {
    return (
      <div className={classes.title + " " + classes.container_fluid}>
        <div className="row">
          <div className="col-lg-6">
            <h1 className={classes.download_title +" big-heading"}>Checkout out Mobile app</h1>
            <button
              type="button"
              className={
                "btn btn-dark btn-lg download-button " + classes.download_button
              }
            >
              <i className="fa fa-apple"></i> <p className={classes.p}>Download</p>
            </button>
            <button
              type="button"
              className={
                "btn btn-dark btn-lg download-button " + classes.download_button
              }
            >
              <i className="fa fa-play"></i> <p className={classes.p}>Download</p>
            </button>
          </div>

          <div className="col-lg-6">
            <img
              className={classes.title_image}
              src={iphone}
              alt="iphone-mockup"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
