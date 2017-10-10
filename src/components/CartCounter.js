import React from 'react';
import PropTypes from 'prop-types';
import {FlatButton, IconButton} from "material-ui";
import {connect} from "react-redux";
import {sortBy} from "lodash";
import {openCartListDrawer} from "../actionCreators";

const CartCounter = ({productsCount, openCartListDrawer}) => {
    return (
        <div>
            <FlatButton onClick={openCartListDrawer}>
                <h4>
                    <i className="glyphicon glyphicon-shopping-cart">&nbsp;</i>
                    <span className="badge" style={{background: 'rgb(255, 64, 129)'}}>{productsCount}</span>
                </h4>
            </FlatButton>
        </div>
    );
};

CartCounter.propTypes = {};
CartCounter.defaultProps = {};

function mapStateToProps(state) {
    return {
        products: sortBy(state.shop.products, ['id']),
        productsCount: state.cart.products.length
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openCartListDrawer() {
            return dispatch(openCartListDrawer());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartCounter);
