import React from "react";
import { connect } from "react-redux";
import store from "../store";
import { updateCoords } from "../actions/map";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";


@connect((store) => {
    return {
        center: store.map.center,
        zoom: store.map.zoom,
        bootstrapURLKeys: store.map.bootstrapURLKeys
    };
})

class MapDOM extends React.Component {

    componentWillMount(){
      let geoPosition = new Promise((resolve, reject) => {
        if(navigator.geolocation) {
           navigator.geolocation.getCurrentPosition((position) => {
             resolve(position);
           });
        }
      })
      .then((position) => {
        store.dispatch(updateCoords(position.coords.latitude,position.coords.longitude));
      });
    }

    openMenu() {
        return () => {
            document.getElementById("app-container").classList.toggle("menu-open");
        };
    }

    render() {
        return (
            <div id="map-container">
                <header id="header">
                    <i className="fa fa-bars menu-open" aria-hidden="true" onClick={this.openMenu()}></i>
                </header>
                <div id="map">
                    <GoogleMapReact bootstrapURLKeys={this.props.bootstrapURLKeys}
                                    center={this.props.center}
                                    zoom={this.props.zoom}>
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
}

MapDOM.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  bootstrapURLKeys: PropTypes.object

};
export default MapDOM;
