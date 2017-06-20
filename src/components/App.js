import React from 'react';
import Menu from './Menu';
import MapDOM from './MapDom';

class App extends React.Component {
    render() {
        return (
            <div id="app-container">
                <Menu />
                <MapDOM />
            </div>
        );
    }
}

export default App;