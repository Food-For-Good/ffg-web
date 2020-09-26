import React, { Component } from "react";
import classes from "./Signup.module.css";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
const INITIAL_STATE = {
  username: "",
  email: "",
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
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
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
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
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
              type="text"
              className={classes.fadeIn + " " + classes.second}
              name="username"
              value={username}
              onChange={this.onChange}
              placeholder="NAME"
            />
            <input
              type="text"
              className={classes.fadeIn + " " + classes.third}
              name="email"
              value={email}
              onChange={this.onChange}
              placeholder="EMAIL"
            />
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
            />
            {error && <p>{error.message}</p>}
          </form>

          <div className={classes.formFooter}>
            <p style={{ display: "inline-block", margin: "auto" }}>
              Already a member? &nbsp;
            </p>
            <a
              className={classes.underlineHover + " " + classes.a}
              href="/login"
            >
              <u>Login</u>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withFirebase(Signup));
