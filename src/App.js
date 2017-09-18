import {connect} from "react-redux";
import React, {Component} from "react";
import {AppBar, FlatButton, FontIcon, IconButton, RaisedButton} from "material-ui";
import * as _ from 'lodash';
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import ProductListPage from "./components/ProductListPage";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {products} = this.props;
        return (
            <Router>
                <div>
                    <AppBar title={"Simple React Redux Saga Shop"} iconElementRight={<IconButton iconClassName="material-icons">shopping_cart</IconButton>}/>
                    <div className="container-fluid">
                        <Route path="/" exact component={() => {
                            return (
                                <ProductListPage products={products}/>
                            )
                        }} />
                    </div>
                </div>
            </Router>
        )
    }
}

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