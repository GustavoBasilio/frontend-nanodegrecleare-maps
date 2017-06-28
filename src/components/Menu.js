import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {updateFilter, updateInfoMarker} from "../actions/search";
import store from "../store";


@connect((store) => {
    return {
        status: store.status,
        filter: store.filter,
        markers: store.markers
    };
})

class Menu extends React.Component {

    filterLocation() {
        store.dispatch(updateFilter(document.getElementById('input-search').value));
    }

    openInfoWindow(key,e) {
        store.dispatch(updateInfoMarker(key));
    }

    //Open or close the side menu
    openMenu() {
        return () => {
            document.getElementById("app-container").classList.toggle("menu-open");
        };
    }

    render() {
        return (
            <aside id="menu-container">
                <i className="fa fa-times close-menu" aria-hidden="true" onClick={this.openMenu()}></i>
                <h1>Near Bars</h1>
                <div id="menu-search">
                    <form id="form-search">
                        <input id="input-search" type="text" placeholder="Station Location" name="location" onChange={this.filterLocation}/>
                    </form>
                    {(this.props.status == 1) &&  <i className="fa fa-spinner loading-icon" aria-hidden="true"></i>}
                    <ul id="search-results">
                      {this.props.markers && this.props.markers.map((marker,key) => {
                        if(marker.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) < 0 && this.props.filter != "") return;
                        return (
                            <li key={"marker-"+key} data-key={key} onClick={this.openInfoWindow.bind(this, key)}>
                                <h2>{marker.name}</h2>
                                <h3>{marker.address}</h3>
                            </li>
                        );
                      })}       
                    </ul>
                </div>
            </aside>
        );
    }
}

Menu.propTypes = {
  status: PropTypes.number,
  filter: PropTypes.string,
  markers: PropTypes.array
};
export default Menu;
