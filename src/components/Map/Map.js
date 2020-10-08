import classes from "./Map.module.css";
import React, { PureComponent } from "react";
import RoomIcon from "@material-ui/icons/Room";
import ReactMapGL, {
  Marker,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";

const mapStyle = {
  width: "400px",
  height: "400px",
};

const mapboxApiKey =
  "pk.eyJ1IjoibW9oaXQ0NDI2IiwiYSI6ImNrZnRsaHd5bDBvNG4zNnN2NTRjY3F0MWQifQ.1NQFua2bZClt9B7BaJsgbA";

class MapView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewport: this.props.viewport,
      tempMarker: null,
    };
  }
  handle_submit = (e) => {
    this.props.onchange(this.state.viewport);
    e.preventDefault();
  };
  handle_view = (viewport) => {
    this.setState({
      viewport,
      tempMarker: {
        name: "my location",
        longitude: viewport.longitude,
        latitude: viewport.latitude,
      },
    });
  };

  render() {
    const { viewport, tempMarker } = this.state;

    return (
      <div>
        <ReactMapGL
          mapboxApiAccessToken={mapboxApiKey}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          {...viewport}
          {...mapStyle}
          onViewportChange={this.handle_view}
        >
          {tempMarker && (
            <Marker
              longitude={tempMarker.longitude}
              latitude={tempMarker.latitude}
            >
              <RoomIcon style={{ fontSize: "50px", color: "#FEA848" }} />
            </Marker>
          )}
          <button
            onClick={this.handle_submit}
            className={classes.accept_button}
          >
            <i className="fa fa-check" aria-hidden="true"></i>
          </button>
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            showUserLocation={false}
            className={classes.geo_top}
            auto={true}
          />
          <NavigationControl className={classes.navi_top} />
        </ReactMapGL>
      </div>
    );
  }
}

export default MapView;
