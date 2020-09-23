import React, { Component } from "react";
import classes from "./AboutUs.module.css";
import Footer from "../Homepage/Footer/Footer";
import prayush from './Contributors/prayush.jpeg'
import mohit from './Contributors/mohit.jpeg'

class AboutUs extends Component {
  render() {
    return (
      <div className={classes.body}>
          <h1 className={classes.h1}>About <span className={classes.us_bold}>US</span></h1>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          
            <div className="row">
              
          <div className={"col-lg-6"+ " "+ classes.div_row}>
            <img className={classes.contributor} src={prayush} alt="prayush"/>
            <p>Prayush Dawda </p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            </div>
            <div className={classes.div_row+" "+"col-lg-6" }>
            <img className={classes.contributor} src={mohit} alt="Mohit"/>
            <p>Mohit Balwani </p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            </div>
          </div>
          <div className="row">
              
          <div className={"col-lg-6"+ " "+ classes.div_row}>
            <img className={classes.contributor} src={prayush} alt="prayush"/>
            <p>Prayush Dawda </p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            </div>
            <div className={classes.div_row+" "+"col-lg-6" }>
            <img className={classes.contributor} src={mohit} alt="Mohit"/>
            <p>Mohit Balwani </p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            </div>
          </div>
          <Footer />
    </div>
    );
  }
}

export default AboutUs;
