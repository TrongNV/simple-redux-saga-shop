import {ADD_PRODUCT, REMOVE_PRODUCT, SET_PRODUCTS, SET_SELECTED_PRODUCT, SET_VIEW_PRODUCT_ID} from "../actionTypes";

const defaultState = {
    products: [],
    selectedProduct: {
        image: null,
        description: null,
        title: null,
        price: null
    }
};

export default function shop(state = defaultState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.products}
        case REMOVE_PRODUCT:
            return Object.assign({}, state, {
                products: [
                    ...state.products.filter(product => product.id !== action.product.id)
                ]
            })
        case ADD_PRODUCT:
            return Object.assign({}, state, {
                products: [...state.products, action.product]
            })
        case SET_VIEW_PRODUCT_ID:
            return Object.assign({}, state, {
                productId: action.productId
            })
        case SET_SELECTED_PRODUCT:
            return Object.assign({}, state, {
                selectedProduct: action.selectedProduct
            })
        default:
            return state
    }
}
