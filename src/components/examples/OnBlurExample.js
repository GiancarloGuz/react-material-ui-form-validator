import React from 'react';
import Button from 'material-ui/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class OnBlurExample extends React.Component {

    constructor() {
        super();
        this.state = {
            formData: {
                email: '',
            },
            submitted: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleBlur(event) {
        this.refs[event.target.name].validate(event.target.value);
    }

    handleSubmit() {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
                onSubmit={this.handleSubmit}
                instantValidate={false}
            >
                <h2>OnBlur</h2>
                <TextValidator
                    ref="email"
                    label="Email"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <Button
                    raised
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!') ||
                        (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>
        );
    }
}
