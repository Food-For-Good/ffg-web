import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import classes from "./Login.module.css";
import * as ROUTES from "../../constants/routes";
import { Alert } from "react-bootstrap";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  show: false,
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;
    const isInvalid_empty = password === "" || email === "";
    if (isInvalid_empty) {
      this.setState({ error: { message: "some fields are empty" } });
    } else {
      this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.HOME);
        })
        .catch((error) => {
          this.setState({ error });
        });
    }

    event.preventDefault();
  };
  handleshow = (e) => {
    e.preventDefault();
    this.setState({ show: !this.state.show });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handle_error = () => {
    this.setState({ error: null });
  };
  render() {
    const { email, password, error } = this.state;
    const pass_icon = !this.state.show ? "-slash" : "";
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
              type={this.state.show ? "text" : "password"}
              className={classes.fadeIn + " " + classes.third}
              name="password"
              value={password}
              onChange={this.onChange}
              placeholder="PASSWORD"
              style={{ position: "relative", left: "8px" }}
            />
            <i
              className={"fa fa-eye" + pass_icon + " " + classes.eye_slash}
              onClick={this.handleshow}
            ></i>
            <input
              type="submit"
              className={classes.fadeIn + " " + classes.fourth}
              value="Log In"
            />
            {error && <p>{error.message}</p> ? (
              <Alert dismissible onClose={this.handle_error} variant="danger">
                {error.message}
              </Alert>
            ) : null}
          </form>
          <a
            className={classes.underlineHover + " " + classes.a}
            href="/pw-forget"
          >
            Forgot password?
          </a>
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
