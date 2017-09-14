/*eslint-disable no-unused-vars*/
import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'

import shop from './reducers/shop'
import cart from "./reducers/cart";
import rootSaga from './sagas'
import {MuiThemeProvider} from "material-ui";
import {Provider} from "react-redux";
import App from "./App";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    combineReducers({
        shop,
        cart
    }),
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider>
                <App/>
            </MuiThemeProvider>
        </Provider>
        ,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
