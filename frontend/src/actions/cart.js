import axios from 'axios';
import Cookie from "js-cookies";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../type';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
	try {
		const { data } = await axios.get(`/api/products/${productId}`);
		const { _id, name, imageUrl, price, countInStock } = data;
		dispatch({
			type: CART_ADD_ITEM,
			payload: {
				product: _id,
				name,
				imageUrl,
				price,
				countInStock,
				qty,
			},
		});
		
		const {cart: {cartItems}} = getState();

		Cookie.setItem("cartItems", JSON.stringify(cartItems) );
	} catch (error) {}
};

export const removeFromCart = (productId) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CART_REMOVE_ITEM,
            payload: productId
		})
		const {cart: {cartItems}} = getState();

		Cookie.setItem("cartItems", JSON.stringify(cartItems) );
    } catch (error) {
        
    }
}
