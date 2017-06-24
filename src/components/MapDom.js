import React from "react";
import { connect } from "react-redux";
import store from "../store";
import { updateCoords , createCurrent} from "../actions/map";
import Marker from "./marker";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";


@connect((store) => {
    return {
        center: store.map.center,
        zoom: store.map.zoom,
        bootstrapURLKeys: store.map.bootstrapURLKeys,
        markers: store.map.markers
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
          }
        })
        .then((position) => {
          store.dispatch(updateCoords(position.coords.latitude,position.coords.longitude));
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
                                  lat={marker.latitude}
                                  lng={marker.longitude}
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
  markers: PropTypes.array
};
export default MapDOM;
