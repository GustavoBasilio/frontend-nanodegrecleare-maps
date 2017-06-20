import React from 'react';

class Menu extends React.Component {

    closeMenu() {
        return function() {
            document.getElementById("app-container").classList.toggle("menu-open");
        };
    }

    render() {   
        return (
            <aside id="menu-container">
                <h1>Bart Locations</h1>
                <i className="fa fa-times" aria-hidden="true" onClick={this.closeMenu()}></i>
                <div id="menu-search">
                    <form>
                        <input type="text" placeholder="Station Location" name="location" />
                        <button type="submit">Filtrar</button>
                    </form>
                    <ul id="search-results">
                        <li>teste</li>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default Menu;