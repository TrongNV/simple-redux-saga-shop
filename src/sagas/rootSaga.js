/* eslint-disable no-constant-condition */

import {put, call, takeEvery, all, fork, take, select, spawn} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {change, actionTypes as formActionTypes, SubmissionError} from 'redux-form'
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

function* watchCompleteAddressInput() {
    while (true) {
        const {meta} = yield take(formActionTypes.CHANGE);
        if (meta.field === 'address') {
            const {zipcode, housenumber, street, city, address} =
                yield select((state) => state.form.deliveryAddress.values);

            if (zipcode && street && housenumber && city && address) {
                try {
                    const {data} = yield call(Api.getGeoCodeByAddress, `${street},${housenumber},${city}`);
                    yield put(change('deliveryAddress', 'lat', data.results[0].geometry.location.lat));
                    yield put(change('deliveryAddress', 'lng', data.results[0].geometry.location.lng));
                } catch (e) {

                }
            }
        }
    }
}


export default function* rootSaga() {
    yield fork(getAllProducts);
    yield fork(watchProductAddedToCart);
    yield fork(watchProductRemovedFromCart);
    yield fork(watchViewProductDetail);
    yield fork(watchCompleteAddressInput);
}
