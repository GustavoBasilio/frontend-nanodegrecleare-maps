import React from 'react';
import { connect } from "react-redux";
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';


@connect((store) => {
    return {
        center: store.map.center,
        zoom: store.map.zoom,
        bootstrapURLKeys: store.map.bootstrapURLKeys
    };
})

class MapDOM extends React.Component {

    static propTypes = {
      center: PropTypes.arrayOf(PropTypes.number.isRequired()).isRequired(),
      zoom: PropTypes.number.isRequired(),
      bootstrapURLKeys: PropTypes.shape({
        key:PropTypes.string.isRequired()
      }).isRequired()
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

export default MapDOM;
