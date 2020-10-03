import React from "react";
import { withFirebase } from "../Firebase";

const logout = (props) => {
  props.firebase.doSignOut().then(() => {
    props.history.push("/");
  });
  return null;
};

export default withFirebase(logout);
