import React from 'react';
import Menu from './Menu';
import MapDOM from './Map';

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