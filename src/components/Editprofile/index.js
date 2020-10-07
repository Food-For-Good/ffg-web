import React from "react";
import { withAuthorization } from "../Session";
const editprofile = () => {
  return <h1>Edit profile</h1>;
};
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(editprofile);
