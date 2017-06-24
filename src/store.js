import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import Reducers from "./reducers";

const middlewares = applyMiddleware(logger);

export default createStore(Reducers, middlewares);
