import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART: {
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === item.product);
            const cartItems = state.cartItems.map(x => x.product === existItem.product ? item : x);
            if (existItem) {
                return {
                    ...state,
                    cartItems: cartItems
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]

                }
            }
        }
        case actionTypes.REMOVE_FROM_CART: {
            const cartItems = state.cartItems.filter(x => x.product !== action.payload);
            return {
                ...state,
                cartItems: cartItems
            }
        }
        case actionTypes.CART_RESET:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;

    }
}