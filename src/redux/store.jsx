import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import sessionReducer from "./session/sessionReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
});
const middleWares = [];
const enhancer =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middleWares)
    : composeWithDevTools(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, enhancer);
