/* eslint-disable no-constant-condition */

import {put, call, takeEvery, all, fork, take} from 'redux-saga/effects'
import {delay} from 'redux-saga'

const api = {
    getAllProducts() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {id: 1, name: "Product1", image: ""},
                    {id: 2, name: "Product2", image: ""},
                    {id: 3, name: "Product3", image: ""},
                ])
            }, 1500)
        });
    }
};

export function* getAllProducts() {
    const products = yield call(api.getAllProducts);
    yield put({type: 'SET_PRODUCTS', products});
}

export function* watchProductAddedToCart() {
    while(true) {
        const {product} = yield take('ADD_PRODUCT_TO_CART');
        yield put({type: 'REMOVE_PRODUCT', product})
    }
}

export function* watchProductRemovedFromCart() {
    while(true) {
        const {product} = yield take('REMOVE_PRODUCT_FROM_CART');
        yield put({type: 'ADD_PRODUCT', product})
    }
}

export default function* rootSaga() {
    yield all([
        fork(getAllProducts),
        fork(watchProductAddedToCart),
        fork(watchProductRemovedFromCart),
    ])
}
