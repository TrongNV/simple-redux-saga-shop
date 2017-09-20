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
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;