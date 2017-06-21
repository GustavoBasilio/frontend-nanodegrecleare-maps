import React from 'react';
import { connect } from "react-redux";
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';


@connect((store) => {
    return {
        center: store.map.center,
        bootstrapURLKeys: store.map.bootstrapURLKeys,
        zoom: store.map.zoom
    };
})

class MapDOM extends React.Component {

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

export default MapDOM;