import React from 'react';
import PropTypes from 'prop-types';
import {uniqueId} from "lodash";

const CartItem = ({id, image, title, description, price}) => {
    return (
        <div className="row">
            <div className="col-md-2">
                <img src={image} alt="" className="img-thumbnail"/>
            </div>
            <div className="col-md-8">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="col-md-2">
                <h5>{price}</h5>
            </div>
        </div>
    );
};

CartItem.propTypes = {};
CartItem.defaultProps = {};

export default CartItem;
