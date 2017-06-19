import React from 'react';
import Menu from './Menu';
import MapDOM from './Map';

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <MapDOM />
            </div>
        );
    }
}

export default App;