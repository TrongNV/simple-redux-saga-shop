import React from 'react';
import PropTypes from 'prop-types';
import AddressAutoComplete from "./AddressAutoComplete";
import {Field, formValueSelector, reduxForm, change} from "redux-form";
import {connect} from "react-redux";
import {RaisedButton} from "material-ui";
import Api from '../api';

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
                    throw {zipcode: 'Fill in correct zipcode'}
                })
        } else if(values.zipcode && field === 'housenumber') {
            return Api.getAddressByZipCodeAndNumber(values.zipcode, values.housenumber)
                .then((response) => {
                    const {data} = response;
                    let currentAddress = data._embedded.addresses[0];
                    props.fillStreetName(currentAddress.street);
                    props.fillInCityName(currentAddress.city.label);
                })
                .catch((error) => {
                    throw {housenumber: 'Housnumber unknown for the zipcode'}
                })
        }
        return Promise.resolve();
    },
    asyncBlurFields: ['zipcode', 'housenumber']
})(DeliveryAddressForm);

const selector = formValueSelector('deliveryAddress') // <-- same as form name

function mapStateToProps(state) {
    return {
        zipcode: selector(state, 'zipcode')
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
