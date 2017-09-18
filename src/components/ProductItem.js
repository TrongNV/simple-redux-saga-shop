import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = (props) => {
    const {product: {id, image, description, price, title}} = props;
    return (
        <div className="col-md-2">
            <span>{title}</span>
            <img src={image} alt=""/>
            <span>{price}</span>
        </div>
    );
};

ProductItem.propTypes = {};
ProductItem.defaultProps = {};

export default ProductItem;
