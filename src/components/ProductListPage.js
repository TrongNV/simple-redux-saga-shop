import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from "./ProductItem";

const ProductListPage = ({products = []}) => {
    return (
        <div className="row">
            {products.map((product) => {
                return (
                    <ProductItem key={product.id} product={product}/>
                )
            })}
        </div>
    );
};

ProductListPage.propTypes = {};
ProductListPage.defaultProps = {};

export default ProductListPage;
