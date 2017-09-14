import {connect} from "react-redux";
import ProductList from "./components/ProductList";
import React, {Component} from "react";
import {AppBar} from "material-ui";
import {Grid, Row, Col} from "react-bootstrap";
import * as _ from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppBar title={"Simple React Redux Saga Shop"}/>
                <div className="container">
                    <Grid>
                        <Row>
                            <Col md={6}>
                                <h1>Product list</h1>
                                <ProductList
                                    products={this.props.products}
                                    addProductToCart={this.props.addProductToCart}
                                />
                            </Col>
                            <Col md={6}>
                                <h1>Cart</h1>
                                <ProductList
                                    products={this.props.cart.products}
                                    removeProductFromCart={this.props.removeProductFromCart}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        products: _.sortBy(state.shop.products, ['id']),
        cart: {
            products: _.sortBy(state.cart.products, ['id'])
        }
    }
}

function mapActionsToProps(dispatch) {
    return {
        addProductToCart(product) {
            dispatch({type: 'ADD_PRODUCT_TO_CART', product})
        },
        removeProductFromCart(product) {
            dispatch({type: 'REMOVE_PRODUCT_FROM_CART', product})
        }
    }
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(App);