import React from "react";
import { connect } from "react-redux";
import store from "../store";
import { updateCoords } from "../actions/map";
import { searchPlaces } from "../actions/search";
import Marker from "./marker";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

@connect((store) => {
    return {
        center: store.map.center,
        zoom: store.map.zoom,
        bootstrapURLKeys: store.map.bootstrapURLKeys,
        markers: store.map.markers,
        results: store.search.results
    };
})

class MapDOM extends React.Component {

    componentWillMount(){
      this.goToCurrentLocation();
    }

    //Go to user current location
    goToCurrentLocation() {
        new Promise((resolve, reject) => {
          if(navigator.geolocation) {
             navigator.geolocation.getCurrentPosition((position) => {
               resolve(position);
             });
          }else {
            reject();
          }
        })
        .then((position) => {
          if(position){
            store.dispatch(updateCoords(position.coords.latitude,position.coords.longitude));
            store.dispatch(searchPlaces(position.coords.latitude,position.coords.longitude));
          }
        });
    }

    //Open or close the side menu
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
                    <GoogleMapReact
                      center={this.props.center}
                      zoom={this.props.zoom}
                      bootstrapURLKeys={this.props.bootstrapURLKeys}>
                      {this.props.markers.map((marker,key) => {
                        return <Marker
                                  key={"marker-"+key}
                                  lat={marker.position[0]}
                                  lng={marker.position[1]}
                                  icon={"fa marker "+marker.icon} />;
                      })}
                      {this.props.results && this.props.results.map((marker,key) => {
                        return <Marker
                                  key={"marker-"+key}
                                  lat={marker.position[0]}
                                  lng={marker.position[1]}
                                  icon={"fa marker "+marker.icon} />;
                      })}
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
}

MapDOM.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  bootstrapURLKeys: PropTypes.object,
  markers: PropTypes.array,
  results: PropTypes.array
};
export default MapDOM;
