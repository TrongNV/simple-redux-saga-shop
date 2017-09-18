/* eslint-disable no-constant-condition */

import {put, call, takeEvery, all, fork, take} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import Api from '../api';

export function* getAllProducts() {
    const products = yield call(Api.getAllProducts);
    yield put({type: 'SET_PRODUCTS', products});
}

export function* watchProductAddedToCart() {
    while (true) {
        const {product} = yield take('ADD_PRODUCT_TO_CART');
        yield put({type: 'REMOVE_PRODUCT', product})
    }
}

export function* watchProductRemovedFromCart() {
    while (true) {
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
