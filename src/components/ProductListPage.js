import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from "./ProductItem";
import {connect} from "react-redux";
import * as _ from "lodash";

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

function mapStateToProps(state) {
    return {
        products: _.sortBy(state.shop.products, ['id']),
        cart: {
            products: _.sortBy(state.cart.products, ['id'])
        }
    }
}

ProductListPage.propTypes = {};
ProductListPage.defaultProps = {};

export default connect(
    mapStateToProps
)(ProductListPage)
