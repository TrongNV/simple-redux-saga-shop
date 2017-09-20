const defaultState = {
    products: [],
};

export default function shop(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return {
                ...state,
                products: [...state.products, action.product]
            }
        case 'REMOVE_PRODUCT_FROM_CART':
            return {
                ...state,
                products: [...state.products.filter(product => product.id !== action.product.id)]
            }
        case 'OPEN_CART_LIST_DRAWER':
            return {
                ...state,
                cartListDrawerOpened: true
            }
        case 'CLOSE_CART_LIST_DRAWER':
            return {
                ...state,
                cartListDrawerOpened: false
            }
        default:
            return state
    }
}
