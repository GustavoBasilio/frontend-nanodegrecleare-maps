import { combineReducers } from "redux";
import { mapReducer } from "./map";
import { searchReducer} from "./search";

const Reducer = combineReducers({
    'map': mapReducer,
    'search': searchReducer
});

export default Reducer;
