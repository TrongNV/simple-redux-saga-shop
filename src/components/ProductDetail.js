import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {Component} from 'react';
import {bindActionCreators} from "redux";
import {RaisedButton} from "material-ui";

class ProductDetail extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const productId = this.props.match.params.id;
        this.props.dispatch({type: 'SET_VIEW_PRODUCT_ID', productId})
    }

    addToCart() {
        const product = this.props.selectedProduct;
        this.props.dispatch({type: 'ADD_PRODUCT_TO_CART', product});
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
                                <RaisedButton fullWidth={true}
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

function mapStateToProps(state, ownProps) {
    return {
        selectedProduct: state.shop.selectedProduct
    }
}

export default connect(
    mapStateToProps
)(ProductDetail)
