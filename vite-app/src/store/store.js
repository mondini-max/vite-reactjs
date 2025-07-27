import { createStore, applyMiddleware, compose } from 'redux';
import { cartReducers } from './reducers/cartReducers.js';
import { thunk } from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  cartReducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
