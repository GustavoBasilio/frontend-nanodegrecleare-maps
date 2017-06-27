import React from "react";
import { connect } from "react-redux";
import store from "../store";
import { updateCoords } from "../actions/map";
import { searchPlaces } from "../actions/search";
import Marker from "./marker";
import InfoWindow from "./infowindow";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

@connect((store) => {
    return {
        center: store.center,
        zoom: store.zoom,
        bootstrapURLKeys: store.bootstrapURLKeys,
        current: store.current,
        infowindow: store.infowindow,
        markers: store.markers
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

    showInfowindow() {
        if(!this.props.infowindow.status) return;
        let marker = this.props.infowindow.marker;
        return <InfoWindow 
                    lat={this.props.markers[marker].position[0]}
                    lng={this.props.markers[marker].position[1]}
                    name={this.props.markers[marker].name}
                    address={this.props.markers[marker].address}
                    image={this.props.markers[marker].image}/>;
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

                      <Marker
                        key="marker-current"
                        lat={this.props.center[0]}
                        lng={this.props.center[1]}
                        icon="fa marker current-marker fa-map-pin" />

                      {this.props.markers && this.props.markers.map((marker,key) => {
                        return <Marker
                                  key={"marker-"+key}
                                  lat={marker.position[0]}
                                  lng={marker.position[1]}
                                  icon="fa marker fa-beer"/>;
                      })}
                      {this.showInfowindow()}
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
  current: PropTypes.object,
  infowindow: PropTypes.object,
  markers: PropTypes.array
};
export default MapDOM;
