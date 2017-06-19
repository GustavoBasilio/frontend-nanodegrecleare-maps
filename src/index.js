import css from "./assets/sass/app.scss";
import "font-awesome-webpack";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { exempleAction } from "./actions";
import Reducers from "./reducers";
import App from "./components/App";

let store = createStore(Reducers);
store.dispatch(exempleAction('ChangeExemple'));

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);