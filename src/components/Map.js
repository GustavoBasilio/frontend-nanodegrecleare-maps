import React from 'react';

class MapDOM extends React.Component {

    openMenu() {
        return function() {
            document.getElementById("app-container").classList.toggle("menu-open");
        };
    }

    render() {   
        return (
            <div>
                <header id="header">
                    <i className="fa fa-bars menu-open" aria-hidden="true" onClick={this.openMenu()}></i>
                </header>
            </div>
        );
    }
}

export default MapDOM;