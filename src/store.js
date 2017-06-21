import { createStore } from "redux";
import { mapAction } from "./actions/map";
import Reducers from "./reducers";

export default createStore(Reducers);