const defaultState = {
    products: []
};

export default function shop(state = defaultState, action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {...state, products: action.products}
        case 'REMOVE_PRODUCT':
            return Object.assign({}, state, {
                products: [
                    ...state.products.filter(product => product.id !== action.product.id)
                ]
            })
            return state;
        case 'ADD_PRODUCT':
            return Object.assign({}, state, {
                products: [...state.products, action.product]
            })
            return state;
        default:
            return state
    }
}
