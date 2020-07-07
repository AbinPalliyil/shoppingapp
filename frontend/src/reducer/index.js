import { combineReducers } from 'redux';

import product from './product';
import productDetails from './productDetails';

export default combineReducers({
	products: product,
	productDetails: productDetails,
});
