import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../store";


@connect((store) => {
    return {
        status: store.search.status
    };
})

class Menu extends React.Component {
    render() {
        return (
            <aside id="menu-container">
                <h1>Near Bars</h1>
                <div id="menu-search">
                    <form id="form-search">
                        <input id="input-search" type="text" placeholder="Station Location" name="location" />
                        <button id="submit-search" type="button"><i className="fa fa-filter" aria-hidden="true"></i>Filtrar</button>
                    </form>
                    {(this.props.status == 1) &&  <i className="fa fa-spinner loading-icon" aria-hidden="true"></i>}
                    <ul id="search-results">
                    </ul>
                </div>
            </aside>
        );
    }
}

Menu.propTypes = {
  status: PropTypes.number
};
export default Menu;
