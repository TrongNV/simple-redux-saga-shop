import React from 'react';
import PropTypes from 'prop-types';
import {FlatButton, IconButton} from "material-ui";
import {connect} from "react-redux";
import * as _ from "lodash";

const CartCounter = ({cart, openCartListDrawer}) => {
    return (
        <div>
            <FlatButton onClick={openCartListDrawer}>
                <h4>
                    <i className="glyphicon glyphicon-shopping-cart">&nbsp;</i>
                    <span className="badge" style={{background: 'rgb(255, 64, 129)'}}>{cart.products.length}</span>
                </h4>
            </FlatButton>
        </div>
    );
};

CartCounter.propTypes = {};
CartCounter.defaultProps = {};

function mapStateToProps(state) {
    return {
        products: _.sortBy(state.shop.products, ['id']),
        cart: {
            products: _.sortBy(state.cart.products, ['id'])
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openCartListDrawer() {
            return dispatch({type: 'OPEN_CART_LIST_DRAWER'});
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartCounter);
