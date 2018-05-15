/* eslint-disable */
import React from 'react';
import TextField from '@material-ui/core/TextField';
/* eslint-enable */
import { ValidatorComponent } from 'react-form-validator-core';

export default class SelectValidator extends ValidatorComponent {

    render() {
        /* eslint-disable no-unused-vars */
        const {
            errorMessages,
            validators,
            requiredError,
            helperText,
            validatorListener,
            ...rest
        } = this.props;
        const { isValid } = this.state;
        return (
            <TextField
                {...rest}
                select
                error={!isValid}
                helperText={(!isValid && this.getErrorMessage()) || helperText}
            />
        );
    }
}
