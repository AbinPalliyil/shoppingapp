import axios from 'axios';
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_ERROR } from '../type';

export const listProduct = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const res = await axios.get('/api/products');
        console.log(res)
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: res.data})
    } catch (error) {
        console.log(error)
        dispatch({type: PRODUCT_LIST_ERROR, payload: "Error"})
    }
}