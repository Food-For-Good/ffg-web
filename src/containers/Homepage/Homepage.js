import React, { Component } from "react";
import classes from "./Homepage.module.css";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Download from "./Download/Download";
// import Modal from "../../components/UI/Modal/Modal";

class Homepage extends Component {
  render() {
    return (
      <div className={classes.body}>
        {/* <Modal show={true}></Modal> */}
        <h1 class={classes.brand}>Food For Good</h1>
        <h2 class={classes.caption}>Bringing Smiles together!</h2>
        <div class={classes.parallax}></div>
        <Features />
        <Download />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
