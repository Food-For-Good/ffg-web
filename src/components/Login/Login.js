import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import classes from "./Login.module.css";
import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
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
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";
    return (
      <div className={classes.wrapper + " " + classes.fadeInDown}>
        <div className={classes.formContent}>
          <div className={classes.fadeIn + " " + classes.first}>
            <p>
              {" "}
              <span className={classes.bold}>Welcome Back</span>
              <span className={classes.exclaim}>!</span>
            </p>
          </div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              id="login"
              className={classes.fadeIn + " " + classes.second}
              name="email"
              value={email}
              onChange={this.onChange}
              placeholder="EMAIL"
            />
            <input
              type="password"
              className={classes.fadeIn + " " + classes.third}
              name="password"
              value={password}
              onChange={this.onChange}
              placeholder="PASSWORD"
            />
            <input
              disabled={isInvalid}
              type="submit"
              className={classes.fadeIn + " " + classes.fourth}
              value="Log In"
            />
            {error && <p>{error.message}</p>}
          </form>

          <div className={classes.formFooter}>
            <p style={{ display: "inline-block", margin: "auto" }}>
              New here? &nbsp;
            </p>
            <a
              className={classes.underlineHover + " " + classes.a}
              href="/signup"
            >
              <u>Join Us!</u>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withFirebase(Login));
