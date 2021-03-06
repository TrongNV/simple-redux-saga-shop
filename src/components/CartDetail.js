import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {uniqueId} from "lodash";
import CartItem from "./CartItem";
import {Divider, RaisedButton} from "material-ui";
import {Link} from "react-router-dom";
import ShopHOC from "./ShopHOC";

const CartDetail = ({cartProducts, totalPrice}) => {

    return (
        <div>
            <h2>Shopping Cart</h2>
            <Divider/>
            <br/>
            {cartProducts.map((product) => {
                return (
                    <CartItem key={uniqueId()} {...product}/>
                )
            })}
            <br/>
            <div className="row" style={{background: "#eee"}}>
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                    <h4>
                        Total
                    </h4>
                </div>
                <div className="col-md-2">
                    <h4>
                        {totalPrice}
                    </h4>
                </div>
            </div>
            <div className="row" style={{marginTop: 50}}>
                <div className="col-md-4 col-md-offset-4">
                    <Link to="/checkout">
                        <RaisedButton label="Checkout" secondary={true} fullWidth={true}/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

CartDetail.propTypes = {};
CartDetail.defaultProps = {};

export default ShopHOC(CartDetail)
