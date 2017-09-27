import React from 'react';
import PropTypes from 'prop-types';
import AddressAutoComplete from "./AddressAutoComplete";
import {Field, formValueSelector, reduxForm, change, stopAsyncValidation, reset} from "redux-form";
import {connect} from "react-redux";
import {RaisedButton} from "material-ui";
import Api from '../api';
import {take, select, takeEvery} from "redux-saga/effects";
import {store as reduxStore} from '../main';

function DeliveryAddressForm({handleSubmit}) {
    return (
        <form onSubmit={handleSubmit((values) => {
            debugger
        })}>
            <AddressAutoComplete component="input"/>
            <RaisedButton type="submit" label="Submit"/>
        </form>
    );
}

DeliveryAddressForm.propTypes = {};
DeliveryAddressForm.defaultProps = {};

DeliveryAddressForm = reduxForm({
    form: 'deliveryAddress',

    asyncValidate: (values, dispatch, props, field) => {
        if (field === 'zipcode') {
            return Api.getAddressByZipCode(values.zipcode)
                .catch((error) => {
                    throw {zipcode: 'Incorrect zipcode'}
                })
        }
        else if (values.zipcode && field === 'housenumber') {
            return Api.getAddressByZipCodeAndNumber({zipcode: values.zipcode, number: values.housenumber})
                .catch((error) => {
                    throw {housenumber: 'Housenumber unknown for the zipcode'}
                })
        }
        return Promise.resolve();
    },
    asyncBlurFields: ['zipcode', 'housenumber']
})(DeliveryAddressForm);

const selector = formValueSelector('deliveryAddress') // <-- same as form name

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fillStreetName(streetName) {
            dispatch(change('deliveryAddress', 'street', streetName));
        },
        fillInCityName(cityName) {
            dispatch(change('deliveryAddress', 'city', cityName));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeliveryAddressForm);
