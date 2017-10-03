import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form'
import {TextField} from "material-ui";


const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => {
    return (
        <TextField
            hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
        />
    )
};


class AddressAutoComplete extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <section>
                <div>
                    <Field name="zipcode" component={renderTextField} label="Zipcode" autoFocus/>
                </div>
                <div>
                    <Field name="housenumber" component={renderTextField} label="House Number"/>
                </div>
                <div>
                    <Field name="street" component={renderTextField} label="Street"/>
                </div>
                <div>
                    <Field name="city" component={renderTextField} label="City"/>
                </div>
            </section>
        );
    }
}

AddressAutoComplete.propTypes = {};
AddressAutoComplete.defaultProps = {};


export default AddressAutoComplete
