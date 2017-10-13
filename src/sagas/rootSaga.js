/* eslint-disable no-constant-condition */

import {call, fork, put, select, take} from 'redux-saga/effects'
import {actionTypes as formActionTypes} from 'redux-form'
import Api from '../MockApi';
import {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, SET_VIEW_PRODUCT_ID} from "../actionTypes";
import {initShopProducts, selectProductToView, setLatForAddress, setLngForAddress} from "../actionCreators";

export function* getAllProducts() {
    const products = yield call(Api.getAllProducts);
    yield put(initShopProducts(products));
}

export function* watchViewProductDetail() {
    while (true) {
        const {productId} = yield take(SET_VIEW_PRODUCT_ID);
        const selectedProduct = yield call(Api.getProduct, parseInt(productId));
        yield put(selectProductToView(selectedProduct));
    }
}

function* watchCompleteAddressInput() {
    while (true) {
        const {meta} = yield take(formActionTypes.CHANGE);
        if (meta.field === 'address') {
            const {zipcode, housenumber, street, city, address} =
                yield select((state) => state.form['deliveryAddress'].values);

            if (zipcode && street && housenumber && city && address) {
                try {
                    const {data} = yield call(Api.getGeoCodeByAddress, `${street},${housenumber},${city}`);
                    const lat = data.results[0]['geometry'].location.lat;
                    const lng = data.results[0]['geometry'].location.lng;
                    yield put(setLatForAddress(lat));
                    yield put(setLngForAddress(lng));
                } catch (e) {

                }
            }
        }
    }
}


export default function* rootSaga() {
    yield fork(getAllProducts);
    yield fork(watchViewProductDetail);
    yield fork(watchCompleteAddressInput);
}
