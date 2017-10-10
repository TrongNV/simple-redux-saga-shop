import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const ProductItem = ({id, image, description, price, title}) => {
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

ProductItem.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};
ProductItem.defaultProps = {};

export default ProductItem;
