import {connect} from "react-redux";
import React, {Component} from "react";
import {AppBar, FlatButton, FontIcon, IconButton, RaisedButton} from "material-ui";
import * as _ from 'lodash';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

const history = createHistory();
import ProductListPage from "./components/ProductListPage";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {products, cart} = this.props;
        return (
            <Router>
                <div>
                    <AppBar title={"Simple React Redux Saga Shop"}
                            iconElementRight={<Cart />}/>
                    <div className="container">
                        <Route path="/" exact component={() => {
                            return (
                                <ProductListPage />
                            )
                        }}/>
                        <Route path="/products/:id" component={ProductDetail}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;