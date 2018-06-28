/* eslint-disable */
import React from 'react';
import TimePicker from 'material-ui/TimePicker';
/* eslint-enable */
import { ValidatorComponent } from 'react-form-validator-core';

export default class TimeValidator extends ValidatorComponent {

    render() {
        // eslint-disable-next-line
        const { errorMessages, validators, requiredError, errorText, validatorListener, withRequiredValidator, ...rest } = this.props;
        const { isValid } = this.state;
        return (
            <TimePicker
                {...rest}
                ref={(r) => { this.input = r; }}
                errorText={(!isValid && this.getErrorMessage()) || errorText}
            />
        );
    }
}
