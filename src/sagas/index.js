/* eslint-disable no-constant-condition */

import {put, call, takeEvery, all, fork, take, select, spawn} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import Api from '../api';


export function* getAllProducts() {
    const products = yield call(Api.getAllProducts);
    yield put({type: 'SET_PRODUCTS', products});
}

export function* watchProductAddedToCart() {
    while (true) {
        const {product} = yield take('ADD_PRODUCT_TO_CART');
    }
}

export function* watchProductRemovedFromCart() {
    while (true) {
        const {product} = yield take('REMOVE_PRODUCT_FROM_CART');
    }
}

export function* watchViewProductDetail() {
    while (true) {
        const {productId} = yield take('SET_VIEW_PRODUCT_ID');
        const selectedProduct = yield call(Api.getProduct, parseInt(productId));
        yield put({type: 'SET_SELECTED_PRODUCT', selectedProduct});
    }
}

export default function* rootSaga() {
    yield fork(getAllProducts);
    yield fork(watchProductAddedToCart);
    yield fork(watchProductRemovedFromCart);
    yield fork(watchViewProductDetail);
}
