import React, { Component } from "react";
import classes from "./Homepage.module.css";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Download from "./Download/Download";


class Homepage extends Component {
  render() {
    return (
      <div className={classes.body}>
        <h1 className={classes.brand}>Food For <span className={classes.good_bold}>Good</span></h1>
        <h2 className={classes.caption}>Bringing Smiles together!</h2>
        <div className={classes.parallax}></div>
        <Features />
        <Download />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
