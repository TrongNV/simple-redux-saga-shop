import {products} from '../MockApi';
import {sample} from "lodash";
import {
    ADD_PRODUCT_TO_CART, CLOSE_CART_LIST_DRAWER, OPEN_CART_LIST_DRAWER,
    REMOVE_PRODUCT_FROM_CART
} from "../actionTypes";

const defaultState = {
    products: [sample(products)]
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                products: [...state.products.map((product) => {
                    product.animated = false;
                    return product;
                }), {...action.product, animated: true}]
            };
        case REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                products: [...state.products.filter(product => product.id !== action.product.id)]
            };
        case OPEN_CART_LIST_DRAWER:
            return {
                ...state,
                cartListDrawerOpened: true
            };
        case CLOSE_CART_LIST_DRAWER:
            return {
                ...state,
                cartListDrawerOpened: false
            };
        default:
            return state
    }
}
