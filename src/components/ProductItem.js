import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const ProductItem = (props) => {
    const {product: {id, image, description, price, title}} = props;
    return (
        <div className="col-md-3 col-sm-6 col-xs-6">
            <Link to={"products/" + id}>
                <div className="text-left">
                    <img src={image} alt=""/>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <h5>{price}</h5>
                </div>
            </Link>
        </div>
    );
};

ProductItem.propTypes = {};
ProductItem.defaultProps = {};

export default ProductItem;
