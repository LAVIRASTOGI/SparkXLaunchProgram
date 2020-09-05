import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import thunk from "redux-thunk";
import userSpaceXReducer from "./reducer/userSpaceXReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const reducers = combineReducers({
    userSpaceXdata: userSpaceXReducer,
  });

  const middleware = [thunk];

  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
  );
};
