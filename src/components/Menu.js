import React from 'react';

class Menu extends React.Component {
    render() {   
        return (
            <aside id="menu-title">
                <h1>Bart Locations</h1>
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