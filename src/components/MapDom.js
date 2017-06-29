import React from "react";
import { connect } from "react-redux";
import store from "../store";
import { updateCoords } from "../actions/map";
import { searchPlaces, updateInfoMarker} from "../actions/search";
import Marker from "./marker";
import InfoWindow from "./infowindow";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

//Redux connecting store to props
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

//Statefull component that represents the map and the header
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

    //Open info window
    openInfoWindow(key,e) {
        store.dispatch(updateInfoMarker(key));
    }

    //Open or close the side menu
    openMenu() {
        return () => {
            document.getElementById("app-container").classList.toggle("menu-open");
        };
    }

    //Creates the infowindow if it is visible
    showInfowindow() {
        if(!this.props.infowindow.status) return;
        let marker = this.props.infowindow.marker;
        return <InfoWindow 
                    lat={this.props.markers[marker].position[0]}
                    lng={this.props.markers[marker].position[1]}
                    name={this.props.markers[marker].name}
                    address={this.props.markers[marker].address}/>;
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
                        key="marker-cuupdateInfoMarkerrrent"
                        openInfo={{}}
                        lat={this.props.center[0]}
                        lng={this.props.center[1]}
                        icon="fa marker current-marker fa-map-pin"/>

                      {this.props.markers && this.props.markers.map((marker,key) => {
                        return <Marker
                                  key={"marker-"+key}
                                  lat={marker.position[0]}
                                  lng={marker.position[1]}
                                  openInfo={{id: key, callback: this.openInfoWindow}}
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
