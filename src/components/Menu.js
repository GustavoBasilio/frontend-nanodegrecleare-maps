import React from 'react';

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
                    <ul id="search-results">
                    </ul>
                </div>
            </aside>
        );
    }
}

export default Menu;
