import React from 'react';
import PropTypes from 'prop-types';
import {uniqueId} from "lodash";
import CartItem from "./CartItem";
import {connect} from "react-redux";
import ShopHOC from "./ShopHOC";

const DeliverySummary = ({cartProducts, totalPrice}) => {
    return (
        <div>
            {cartProducts.map((product) => {
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


export default ShopHOC(DeliverySummary)

