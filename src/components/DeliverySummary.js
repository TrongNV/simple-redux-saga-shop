import React from 'react';
import PropTypes from 'prop-types';
import {uniqueId} from "lodash";
import CartItem from "./CartItem";
import {connect} from "react-redux";

const DeliverySummary = ({products, totalPrice}) => {
    return (
        <div>
            {products.map((product) => {
                return (
                    <CartItem key={uniqueId()} {...product}/>
                )
            })}
            <h3>Total: {totalPrice}</h3>
        </div>
    );
};

DeliverySummary.propTypes = {};
DeliverySummary.defaultProps = {};

function mapStateToProps(state) {
    return {
        products: state.cart.products,
        totalPrice: state.cart.products.reduce((totalPrice, {price}) => {
            return totalPrice + price;
        }, 0)
    }
}

export default connect(
    mapStateToProps
)(DeliverySummary)

