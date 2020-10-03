import React, { Component } from "react";
import classes from "./pwchange.module.css";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";
    return (
      <div className={classes.wrapper + " " + classes.fadeInDown}>
        <div className={classes.formContent}>
          <div className={classes.fadeIn + " " + classes.first}>
            <p>
              {" "}
              <span className={classes.bold}>Start Sharing</span>
              <span className={classes.exclaim}>!</span>
            </p>
          </div>
          <form onSubmit={this.onSubmit}>
            <input
              type="password"
              className={classes.fadeIn + " " + classes.third}
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              placeholder="PASSWORD"
            />
            <input
              type="password"
              className={classes.fadeIn + " " + classes.third}
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              placeholder="CONFIRM PASSWORD"
            />

            <input
              type="submit"
              className={classes.fadeIn + " " + classes.fourth}
              disabled={isInvalid}
              value="Update"
            />
            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(withFirebase(Signup));
