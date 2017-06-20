import React from 'react';
import GoogleMapReact from 'google-map-react';

class MapDOM extends React.Component {
    constructor () {
        super();
        this.center = [59.938043, 30.337157];
        this.zoom = 8;
        this.minZoom = 4;
        this.minZoomOverride = true;
        this.bootstrapURLKeys = {key: "AIzaSyBkUMIkAsP8A_zi654O2CUhA7s0I_QttT4"};
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
                    <GoogleMapReact bootstrapURLKeys={this.bootstrapURLKeys}
                                    center={this.center}
                                    zoom={this.zoom}>
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
}

export default MapDOM;