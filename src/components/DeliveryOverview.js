import React from 'react';
import PropTypes from 'prop-types';
import DeliveryAddressForm from "./DeliveryAddressForm";
import DeliverySummary from "./DeliverySummary";
import {connect} from "react-redux";
import {RaisedButton} from "material-ui";

const showResults = (event) => {
    debugger
}

const DeliveryOverview = ({handleSubmit, products}) => {
    return (
        <div className="row">
            <form>
                <div className="col-md-4">
                    <h3>Delivery address</h3>
                    <DeliveryAddressForm onSubmit={showResults}/>
                </div>
                <div className="col-md-8">
                    <h3>Summary</h3>
                    <DeliverySummary products={products}/>
                    <div className="text-right"><RaisedButton label="End this example" secondary={true} /></div>
                </div>
            </form>
        </div>
    );
};

DeliveryOverview.propTypes = {};
DeliveryOverview.defaultProps = {};

function mapStateToProps(state) {
    return {
        products: state.cart.products,
    }
}

export default connect(
    mapStateToProps
)(DeliveryOverview)
