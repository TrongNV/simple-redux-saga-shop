import {connect} from "react-redux";
import React, {Component} from "react";
import {AppBar, FlatButton, FontIcon, IconButton, RaisedButton} from "material-ui";
import * as _ from 'lodash';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

const history = createHistory();
import ProductListPage from "./components/ProductListPage";
import ProductDetail from "./components/ProductDetail";
import CartCounter from "./components/CartCounter";
import CartListDrawer from "./components/CartListDrawer";
import CartDetail from "./components/CartDetail";
import DeliveryOverview from "./components/DeliveryOverview";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <AppBar title={"Simple React Redux Saga Shop"} iconElementRight={<CartCounter/>}/>
                    <CartListDrawer/>
                    <div className="container">
                        <Route path="/" exact component={ProductListPage}/>
                        <Route path="/products/:id" component={ProductDetail}/>
                        <Route path="/cart-detail" component={CartDetail}/>
                        <Route path="/checkout" component={DeliveryOverview}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;