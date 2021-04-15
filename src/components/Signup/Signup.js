import React, { Component } from "react";
import classes from "./Signup.module.css";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { Alert } from "react-bootstrap";
import add_location from "./add_location.svg";
import Map from "../Map/Map";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Address from "../Map/Address";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
  show_one: false,
  show_two: false,
  viewport: {
    latitude: 0,
    longitude: 0,
    zoom: 14,
    width: "400px",
    height: "400px",
  },
  show_button: true,
  show_address: false,
  val: "",
};
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne, passwordTwo, val } = this.state;
    const isInvalid_password = passwordOne !== passwordTwo;
    const isInvalid_empty =
      passwordOne === "" || email === "" || username === "" || val === "";
    if (isInvalid_password) {
      this.setState({
        error: { message: "Passwords do not match!" },
      });
    } else if (isInvalid_empty) {
      this.setState({ error: { message: "some fields are empty" } });
    } else {
      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then((authUser) => {
          this.props.firebase.db.collection("users").doc(email).set({
            email: email,
            username: username,
            address:val
          });
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.HOME);
        })
        .catch((error) => {
          this.setState({ error });
        });
    }

    event.preventDefault();
  };

  handleshow_one = (e) => {
    e.preventDefault();
    this.setState({ show_one: !this.state.show_one });
  };

  handleshow_two = (e) => {
    e.preventDefault();
    this.setState({ show_two: !this.state.show_two });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handle_error = () => {
    this.setState({ error: null });
  };
  handle_input = (e) => {
    this.setState({ val: e.target.value });

    e.preventDefault();
  };
  handle = (e) => {
    this.setState({
      viewport: e,
      show_button: true,
      show_address: true,
    });
  };
  handle_address = (e) => {
    this.setState({ val: e });
  };
  handle_button = (e) => {
    this.setState({ show_button: false, show_address: false });
    e.preventDefault();
  };
  onOpenModal = () => {
    this.setState({ show_button: false });
  };

  onCloseModal = () => {
    this.setState({ show_button: true });
  };

  render() {
    let ele = this.state.show_button ? (
      <div style={{ padding: "5px", margin: "5px" }}>
        <a href="#" onClick={this.handle_button}>
          <img src={add_location} className={classes.svg_img} />{" "}
          <p style={{ display: "inline-block" }}>Add Location</p>
        </a>
      </div>
    ) : (
      <Modal open={!this.state.show_button} onClose={this.onCloseModal}>
        <Map onchange={this.handle} viewport={this.state.viewport} />
      </Modal>
    );
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const pass_icon_1 = !this.state.show_one ? "-slash" : "";
    const pass_icon_2 = !this.state.show_two ? "-slash" : "";
    ele = this.state.show_address ? (
      <div>
        <Address
          longitude={this.state.viewport.longitude}
          latitude={this.state.viewport.latitude}
          onchange_add={this.handle_address}
        />
        <textarea value={this.state.val} onChange={this.handle_input} />
        {ele}
      </div>
    ) : (
      ele
    );
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
              type={this.state.show_one ? "text" : "password"}
              className={classes.fadeIn + " " + classes.third}
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              placeholder="PASSWORD"
              style={{ position: "relative", left: "8px" }}
            />
            <i
              className={"fa fa-eye" + pass_icon_1 + " " + classes.eye_slash}
              onClick={this.handleshow_one}
            ></i>
            <input
              type={this.state.show_two ? "text" : "password"}
              className={classes.fadeIn + " " + classes.third}
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              placeholder="CONFIRM PASSWORD"
              style={{ position: "relative", left: "8px" }}
            />
            <i
              className={"fa fa-eye" + pass_icon_2 + " " + classes.eye_slash}
              onClick={this.handleshow_two}
            ></i>
            {ele}
            <input
              type="submit"
              className={classes.fadeIn + " " + classes.fourth}
              placeholder="Signup"
              value="Sign Up"
            />

            {error && <p>{error.message}</p> ? (
              <Alert dismissible onClose={this.handle_error} variant="danger">
                {error.message}
              </Alert>
            ) : null}
          </form>

          <div className={classes.formFooter}>
            <p style={{ display: "inline-block", margin: "auto" }}>
              Already a member? &nbsp;
            </p>
            <a
              className={classes.underlineHover + " " + classes.a}
              href="/login"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withFirebase(Signup));
