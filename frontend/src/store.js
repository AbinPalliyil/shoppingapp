import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combinedReducer from './reducer';

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combinedReducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk)),
);

export default store;
