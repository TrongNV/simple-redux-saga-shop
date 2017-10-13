import React from 'react';
import PropTypes from 'prop-types';
import DeliveryAddressForm from "./DeliveryAddressForm";
import DeliverySummary from "./DeliverySummary";
import {connect} from "react-redux";
import {RaisedButton} from "material-ui";
import ShopHOC from "./ShopHOC";

const showResults = (event) => {
    debugger
}

const DeliveryOverview = ({handleSubmit, products}) => {
    return (
        <div className="row">
            <form>
                <div className="col-md-4">
                    <h3>Delivery address</h3>
                    <div className="alert alert-warning"><small>Mock Address Data: Splinterlaan 30, 2352SJ Leiderdorp</small></div>
                    <DeliveryAddressForm onSubmit={showResults}/>
                </div>
                <div className="col-md-8">
                    <h3>Summary</h3>
                    <DeliverySummary products={products}/>
                    <hr/>
                    <p>
                        End of Simple React Redux Saga Shop example, check src code on <a href="https://github.com/tlimpanont/simple-redux-saga-shop">Github</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

DeliveryOverview.propTypes = {};
DeliveryOverview.defaultProps = {};

export default ShopHOC(DeliveryOverview)
