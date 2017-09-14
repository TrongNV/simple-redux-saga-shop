const defaultState = {
    products: [],
};

export default function shop(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            state.products = [...state.products, action.product];
            return state;
        case 'REMOVE_PRODUCT_FROM_CART':
            return Object.assign({}, state, {
                products: [
                    ...state.products.filter(product => product.id !== action.product.id)
                ]
            })
            return state;
            return state;
        default:
            return state
    }
}
