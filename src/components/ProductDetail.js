import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {Component} from 'react';
import {bindActionCreators} from "redux";
import {RaisedButton} from "material-ui";
import ShopHOC from "./ShopHOC";
import {addProductToCart, openCartListDrawer, selectProductIdToView} from "../actionCreators";
import {uniqueId} from "lodash";

class ProductDetail extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const productId = this.props.match.params.id;
        this.props.dispatch(selectProductIdToView(productId))
    }

    addToCart() {
        let product = this.props.selectedProduct;
        this.props.dispatch(addProductToCart(product));
        this.props.dispatch(openCartListDrawer());
    }

    render() {
        const {image, price, title, description} = this.props.selectedProduct;
        const {dispatch, selectedProduct} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-2">
                        <img src={image} alt=""/>
                    </div>
                    <div className="col-md-4">
                        <h3>{title}</h3>
                        <p>
                            {description}
                        </p>
                        <h4>{price}</h4>
                        <div className="row">
                            <div className="col-md-12">
                                <RaisedButton fullWidth={true} secondary={true}
                                              onClick={this.addToCart.bind(this)} label="Add to cart"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

ProductDetail.propTypes = {};
ProductDetail.defaultProps = {};


export default ShopHOC(ProductDetail)
