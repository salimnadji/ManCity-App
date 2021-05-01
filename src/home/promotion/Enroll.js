import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import FormField from '../../Components/UI/FormFields';
import { validate } from '../../Components/UI/misc'
import {firebasePromotions } from '../../firebase'

class Enroll extends Component {

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
            }
        }
    }
    clearSuccessMessage(){
        setTimeout(()=>{
            setTimeout(()=>{},2000)
            let successMessageCopy = this.state.formSuccess;
            successMessageCopy='';
            this.setState({
                formSuccess:successMessageCopy
            })
        
    
        },2000)
    }
        
    resetFormSuccess( type ){
        let message ;
        if(type){
            message='Congratulation, you apply successfuly';
        
        }else{
            message=<div className="error_label"> You applied aleady!!</div>
        }
        const formDataCopy = { ...this.state.formData };
        for(let key in formDataCopy){
            formDataCopy[key].value='';
            formDataCopy[key].valid=false;
            formDataCopy[key].validationMessage='';                 
        }

        this.setState({
            formError:false,
            formData:formDataCopy,
            formSuccess:message
        })
        this.clearSuccessMessage();
    }
    submitForm(event) {
        event.preventDefault()
        let dataToSubmit={};
        let formIsValid=true;

        for(let key in this.state.formData){
            dataToSubmit[key]=this.state.formData[key].value
            formIsValid=this.state.formData[key].valid && formIsValid
        }

        if(formIsValid){
            
            firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once("value").then((snapshot)=>{
                if(snapshot.val()===null){
                    firebasePromotions.push(dataToSubmit);
                    this.resetFormSuccess(true)
                }else{
                    this.resetFormSuccess(false);
                    
                }
            })




            // this.resetFormSuccess();
        }else{
            this.setState({
                formError:true
            })
        }
        
    }

    updateForm(element) {
        const formDataCopy = { ...this.state.formData };
        let NewElement = { ...formDataCopy['email'] }
        NewElement.value = element.event.target.value;

        let validData = validate(NewElement)
        NewElement.valid=validData[0]
        NewElement.validationMessage=validData[1]
        console.log(NewElement)
        formDataCopy[element.id] = NewElement;
        this.setState({
            formError:false,
            formData: formDataCopy
        })
    }
    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event) => this.submitForm(event)} >
                        <div className="enroll_title">
                            Enter your email
                        </div>
                        <div className="enroll_input">
                            <FormField id={'email'}
                                formData={this.state.formData.email}
                                change={(element) => this.updateForm(element)} />
                        </div>
                        {this.state.formError ? <div className="error_label">
                                Something went wrong ! try again.
                        </div> : null}
                        <div className="success_label">{this.state.formSuccess} </div>
                        <button onClick={(event)=>this.submitForm(event)}>Enroll</button>

                        <div className="enroll_discl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed . Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

                    </form>
                </div>
            </Fade>

        );
    }
}

export default Enroll;