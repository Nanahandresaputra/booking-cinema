import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "./movies/reducer";
import { seatReducer } from "./seat/reducer";
import authReducer from "./auth/reducer";
import { invoiceReducer } from "./invoice/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  movies: moviesReducer,
  seat: seatReducer,
  auth: authReducer,
  invoice: invoiceReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
