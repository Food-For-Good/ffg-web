import axios from "axios";
import React, { Component } from "react";

class Address extends Component {
  state = {
    add: "",
    latitude: this.props.latitude,
    longitude: this.props.longitude,
  };
  componentDidMount() {
    axios
      .get(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
          this.state.longitude +
          "," +
          this.state.latitude +
          ".json?types=poi&access_token=pk.eyJ1IjoibW9oaXQ0NDI2IiwiYSI6ImNrZnRsaHd5bDBvNG4zNnN2NTRjY3F0MWQifQ.1NQFua2bZClt9B7BaJsgbA"
      )
      .then((result) => {
        // console.log(result);
        result = result.data.features[0];
        this.setState({ add: result.place_name });
        this.props.onchange_add(this.state.add);
      });
  }
  render() {
    return null;
  }
}
export default Address;
