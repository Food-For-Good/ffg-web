import React, { Component } from "react";
import classes from "./forgetPW.module.css";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";
const INITIAL_STATE = {
  email: "",
  error: null,
  success_msg: "",
};
class Forgotpassword extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;
    const isInvalid = email === "";
    if (isInvalid) {
      this.setState({ error: { message: "Email can't be empty" } });
    } else {
      this.props.firebase
        .doPasswordReset(email)
        .then(() => {
          this.setState({
            email: "",
            success_msg: "Please check your email for further instructions.",
            error: null,
          });
        })
        .catch((error) => {
          this.setState({ error });
        });
    }

    event.preventDefault();
  };
  handle_error = () => {
    this.setState({ error: null });
  };
  handle_success = () => {
    this.setState({ success_msg: "" });
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, error, success_msg } = this.state;

    return (
      <div className={classes.wrapper + " " + classes.fadeInDown}>
        <div className={classes.formContent}>
          <div className={classes.fadeIn + " " + classes.first}>
            <p>
              {" "}
              <span className={classes.bold}>Forgot Password</span>
              <span className={classes.exclaim}>?</span>
            </p>
          </div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              className={classes.fadeIn + " " + classes.second}
              name="email"
              value={email}
              onChange={this.onChange}
              placeholder="EMAIL"
            />
            <input
              type="submit"
              className={classes.fadeIn + " " + classes.third}
              value="Reset"
            />
            {error && <p>{error.message}</p> ? (
              <Alert dismissible onClose={this.handle_error} variant="danger">
                {error.message}
              </Alert>
            ) : null}
            {success_msg ? (
              <Alert
                dismissible
                onClose={this.handle_success}
                variant="success"
              >
                {success_msg}
              </Alert>
            ) : null}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(withFirebase(Forgotpassword));
