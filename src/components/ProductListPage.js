import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from "./ProductItem";
import {connect} from "react-redux";
import * as _ from "lodash";
import ShopHOC from "./ShopHOC";

const ProductListPage = ({products = []}) => {
    return (
        <div className="row">
            {products.map((product) => {
                return (
                    <ProductItem key={product.id} {...product} />
                )
            })}
        </div>
    );
};

ProductListPage.propTypes = {};
ProductListPage.defaultProps = {};

export default ShopHOC(ProductListPage)
