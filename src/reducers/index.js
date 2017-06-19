import { combineReducers } from "redux";
import { exempleReducer } from "./exemple";

const Reducer = combineReducers({
    'exemple': exempleReducer
});

export default Reducer;