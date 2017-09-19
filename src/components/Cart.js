import React from 'react';
import PropTypes from 'prop-types';
import {FlatButton, IconButton} from "material-ui";
import {connect} from "react-redux";
import * as _ from "lodash";

const Cart = ({cart}) => {
    return (
        <div>
            <FlatButton>
                <h4>
                    <i className="glyphicon glyphicon-shopping-cart">&nbsp;</i>
                    <span className="badge">{cart.products.length}</span>
                </h4>
            </FlatButton>
        </div>
    );
};

Cart.propTypes = {};
Cart.defaultProps = {};

function mapStateToProps(state) {
    console.log(state.cart);
    return {
        products: _.sortBy(state.shop.products, ['id']),
        cart: {
            products: _.sortBy(state.cart.products, ['id'])
        }
    }
}

export default connect(
    mapStateToProps
)(Cart);
