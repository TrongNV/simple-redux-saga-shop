import React, {Component} from "react";
import {compose} from 'recompose';
import {connect} from "react-redux";
import {closeCartListDrawer, openCartListDrawer} from "../actionCreators";
import {sortBy} from "lodash";

class ShopHOC extends Component {
    constructor(props) {
        super(props);
    }
}

const reduxStore = compose(
    connect(
        (state) => {
            return {
                products: sortBy(state.shop.products, 'id'),
                cart: state.cart,
                cartProducts: state.cart.products,
                cartProductsCount: state.cart.products.length,
                totalPrice: state.cart.products.reduce((totalPrice, {price}) => {
                    return totalPrice + price;
                }, 0),
                cartListDrawerOpened: state.cart.cartListDrawerOpened,
                selectedProduct: state.shop.selectedProduct
            }
        },
        (dispatch) => {
            return {
                dispatch,
                openCartListDrawer() {
                    return dispatch(openCartListDrawer())
                },
                closeCartListDrawer() {
                    return dispatch(closeCartListDrawer())
                }
            }
        }
    )
);

export default compose(
    reduxStore
)