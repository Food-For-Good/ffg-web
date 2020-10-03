import React, { Component } from "react";
import classes from "./AboutUs.module.css";
import Footer from "../Homepage/Footer/Footer";
import prayush from "./Contributors/prayush.jpeg";
import mohit from "./Contributors/mohit.jpeg";
import dhruv from "./Contributors/dhruv.jpeg";
import mansi from "./Contributors/mansi.jpeg";
import AUX from "../../hoc/Auxilary";

class AboutUs extends Component {
  render() {
    return (
      <AUX>
        <div className={classes.body}>
          <h1 className={classes.h1}>
            About <span className={classes.us_bold}>US</span>
          </h1>
          <p>
            India is one of the largest food producers. But ironically, our
            country also holds a high rank in the number of hungry people. FOOD
            FOR GOOD is a small initiative that as its name suggests aims to
            reduce the hunger rate without any kind of an extra effort. It
            serves as a platform that brings likeminded philanthropists to help
            each other accomplish a single target- make this society hunger
            free! Interesting isn’t it? Food for Good is platform where anyone,
            irrespective of his job or age but with one desire of serving the
            society can connect with restaurants and food stalls which are
            equally eager to serve the food that remains after their serving
            hours are completed. Generally, such food easily ends up being a
            part of daily garbage, but people like you and me can make a small
            effort in being a source for that food to reach to those who require
            it the most. As a part of your restaurant, you can request to give
            away all the food, in any amount and without any restrictions. Food
            for good will help you connect to the registered NGOs or
            enthusiastic volunteers who would want to serve the needy in the
            direction. It is doing big things in a small ways. So, lets make our
            society a better place for everyone to live in. And lets bring
            smiles together.
          </p>
          <br />
          <h3 className={classes.h1}>Developers</h3>
          <div className="row">
            <div className={"col-lg-6" + " " + classes.div_row}>
              <img
                className={classes.contributor}
                src={prayush}
                alt="prayush"
              />
              <p>Prayush Dawda </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </div>
            <div className={classes.div_row + " " + "col-lg-6"}>
              <img
                className={classes.contributor_dhruv}
                src={dhruv}
                alt="dhruv"
              />
              <p>Dhruv Patel </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </div>
          </div>
          <div className="row">
            <div className={"col-lg-6" + " " + classes.div_row}>
              <img className={classes.contributor} src={mansi} alt="mansi" />
              <p>Mansi shah </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </div>
            <div className={classes.div_row + " " + "col-lg-6"}>
              <img className={classes.contributor} src={mohit} alt="Mohit" />
              <p>Mohit Balwani </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </AUX>
    );
  }
}

export default AboutUs;
