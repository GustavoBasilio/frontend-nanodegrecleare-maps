import { combineReducers } from "redux";
import { mapReducer } from "./map";

const Reducer = combineReducers({
    'map': mapReducer
});

export default Reducer;