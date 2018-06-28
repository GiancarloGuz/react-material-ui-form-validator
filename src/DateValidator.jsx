/* eslint-disable */
import React from 'react';
import DatePicker from 'material-ui/DatePicker';
/* eslint-enable */
import { ValidatorComponent } from 'react-form-validator-core';

export default class DateValidator extends ValidatorComponent {

    render() {
        // eslint-disable-next-line
        const { errorMessages, validators, requiredError, errorText, validatorListener, withRequiredValidator, ...rest } = this.props;
        const { isValid } = this.state;
        return (
            <DatePicker
                {...rest}
                ref={(r) => { this.input = r; }}
                errorText={(!isValid && this.getErrorMessage()) || errorText}
            />
        );
    }
}
