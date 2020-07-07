import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS } from "../type";

export default (state = { product: {}}, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true
            }
        case PRODUCT_DETAILS_FAIL: 
            return{
                loading: false,
                error: action.payload
            }
        case PRODUCT_DETAILS_SUCCESS: 
        return{
            loading: false,
            product: action.payload
        }
            
    
        default:
            return state;
    }
}