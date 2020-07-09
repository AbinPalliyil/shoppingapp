import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookies';

import combinedReducer from './reducer';

const cartItems = JSON.parse(Cookie.getItem("cartItems")) || [];


const initialState = {cart: {cartItems}};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combinedReducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk)),
);

export default store;
