import React from 'react';
import PropTypes from 'prop-types';
import DeliveryAddressForm from "./DeliveryAddressForm";
import DeliverySummary from "./DeliverySummary";

const showResults = (event) => {
    debugger
}

const DeliveryOverview = (props) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <h3>Delivery address</h3>
                <DeliveryAddressForm onSubmit={showResults} />
            </div>
            <div className="col-md-offset-2 col-md-4">
                <h3>Summary</h3>
                <DeliverySummary />
            </div>
        </div>
    );
};

DeliveryOverview.propTypes = {};
DeliveryOverview.defaultProps = {};

export default DeliveryOverview;
