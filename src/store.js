import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { mapReducer } from "./reducers/map";

// const middlewares = applyMiddleware(logger);
// export default createStore(mapReducer, middlewares);

export default createStore(mapReducer);
