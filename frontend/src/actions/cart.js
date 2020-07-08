import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../type';

export const addToCart = (productId, qty) => async (dispatch) => {
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
	} catch (error) {}
};

export const removeFromCart = (productId) => async (dispatch) => {
    try {
        dispatch({
            type: CART_REMOVE_ITEM,
            payload: productId
        })
    } catch (error) {
        
    }
}
