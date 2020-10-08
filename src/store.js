import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import promise from "redux-promise-middleware";
import { createLogger } from "redux-logger";
import rootReducer from "./reducer";

const loggerMiddleware = createLogger();

export default createStore(
  rootReducer,
  applyMiddleware(promise, thunkMiddleware, loggerMiddleware)
);
