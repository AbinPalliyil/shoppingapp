import { combineReducers } from 'redux';

import product from './product';
import productDetails from './productDetails';
import cart from './cart';

export default combineReducers({
	products: product,
    productDetails: productDetails,
    cart: cart
});
