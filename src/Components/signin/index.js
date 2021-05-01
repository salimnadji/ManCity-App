import React, { Component } from 'react';
import FormField from '../UI/FormFields';
import { validate } from '../UI/misc'
import { firebase } from '../../firebase';



class SingIn extends Component {
    state = {
        formError: false,
        formSuccess: '',
        formData: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            }
        }
    }

    submitForm(event) {
        event.preventDefault()
        let dataToSubmit = {};
        let formIsValid = true;

        for (let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value
            formIsValid = this.state.formData[key].valid && formIsValid;
        }
        
        if (formIsValid) {
            firebase.auth().signInWithEmailAndPassword(
                dataToSubmit.email, dataToSubmit.password
            ).then(() => {
                this.props.history.push('/home')
            }).catch(error => {
                this.setState({
                    formError: true
                })
            }
            )
        } else {
            this.setState({
                formError: true
            })
        }

    }

    updateForm(element) {
        const formDataCopy = { ...this.state.formData };
        let NewElement = { ...formDataCopy[element.id] }
        NewElement.value = element.event.target.value;

        let validData = validate(NewElement)
       
        NewElement.valid = validData[0]
        NewElement.validationMessage = validData[1]
    
        formDataCopy[element.id] = NewElement;
        this.setState({
            formError: false,
            formData: formDataCopy
        })
    }
    render() {
        return (
            <div className="container">
                <div className="signin_wrapper" style={{
                    margin: '100px'
                }}>
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <h2>Please  LogIn</h2>
                        <FormField id={'email'}
                            formData={this.state.formData.email}
                            change={(element) => this.updateForm(element)} />
                        <FormField id={'password'}
                            formData={this.state.formData.password}
                            change={

                                (element) => this.updateForm(element)} />
                        {this.state.formError ? <div className="error_label">
                            Something went wrong ! try again.
                                </div> : null}
                        <button onClick={(event) => this.submitForm(event)}>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SingIn;