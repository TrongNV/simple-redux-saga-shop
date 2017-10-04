import React from 'react';
import PropTypes from 'prop-types';
import AddressAutoComplete from "./AddressAutoComplete";
import {formValueSelector, reduxForm, change} from "redux-form";
import {connect} from "react-redux";
import {RaisedButton} from "material-ui";
import Api from '../api';

function DeliveryAddressForm({lat, lng, mapSrc}) {
    return (
        <div>
            <AddressAutoComplete component="input"/>
        </div>
    );
}

DeliveryAddressForm.propTypes = {};
DeliveryAddressForm.defaultProps = {};

DeliveryAddressForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeliveryAddressForm);

const selector = formValueSelector('deliveryAddress') // <-- same as form name

function mapStateToProps(state) {
    return {
        lat: selector(state, 'lat') | null,
        lng: selector(state, 'lng') | null,
        mapSrc: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDRGTy4ffwK78AJpY3j9A512uPCjny7E48&q='
        + selector(state, 'street') + ',' + selector(state, 'housenumber') + ',' + selector(state, 'city')
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

DeliveryAddressForm = reduxForm({
    form: 'deliveryAddress',
    asyncValidate: (values, dispatch, props, field) => {
        if (field === 'zipcode') {
            return Api.getAddressByZipCode(values.zipcode)
                .then(({data}) => {
                    dispatch(change('deliveryAddress', 'address', data))
                })
                .catch((error) => {
                    throw {zipcode: 'Incorrect zipcode'}
                })
        }
        else if (values.zipcode && field === 'housenumber') {
            return Api.getAddressByZipCodeAndNumber({zipcode: values.zipcode, number: values.housenumber})
                .then(({data}) => {
                    dispatch(change('deliveryAddress', 'address', data))
                })
                .catch((error) => {
                    throw {housenumber: 'Housenumber unknown for the zipcode'}
                })
        }
        return Promise.resolve();
    },
})(DeliveryAddressForm);

export default DeliveryAddressForm;
