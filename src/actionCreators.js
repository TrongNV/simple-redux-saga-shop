import {CLOSE_CART_LIST_DRAWER, OPEN_CART_LIST_DRAWER, SET_PRODUCTS, SET_SELECTED_PRODUCT} from "./actionTypes";
import {change} from 'redux-form';

export const initShopProducts = (products) => {
    return {type: SET_PRODUCTS, products}
};

export const selectProductToView = (selectedProduct) => {
    return {type: SET_SELECTED_PRODUCT, selectedProduct}
};

export const openCartListDrawer = () => {
    return {type: OPEN_CART_LIST_DRAWER}
};

export const closeCartListDrawer = () => {
    return {type: CLOSE_CART_LIST_DRAWER}
};

export const setLatForAddress = (lat) => {
    return change('deliveryAddress', 'lat', lat);
};

export const setLngForAddress = (lng) => {
    return change('deliveryAddress', 'lng', lng);
};

export const fillInStreet = (street) => {
    return change('deliveryAddress', 'street', street);
};

export const fillInCity = (city) => {
    return change('deliveryAddress', 'city', city);
};

export const fillInAddress = (data) => {
    return change('deliveryAddress', 'address', data);
};