import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/spinner/Spinner';
import classes from './ContactData.css';
import axiosOrders from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP'
                },
                value: '',
                validation: {
                    minLength: 5,
                    maxLength: 5,
                    required: true
                },
                valid: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },

        },
        isFormValid: false,
        loading: false
    };

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '';
        }

        if (rules.minLength) {
            isValid = value.trim().length >= rules.minLength;
        }

        if (rules.maxLength) {
            isValid = rules.minLength
                ? value.trim().length >= rules.minLength && value.trim().length <= rules.maxLength
                : value.trim().length <= rules.maxLength;
        }

        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({loading: true})

        const formData = {};
        for (const formElemIdentifier in this.state.orderForm) {
            formData[formElemIdentifier] = this.state.orderForm[formElemIdentifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderForm: formData
        };

        axiosOrders.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = { ...this.state.orderForm };
        const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = updatedFormElement.validation
            ? this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
            : true;
        console.log(updatedFormElement);
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
    };

    render () {

        const formElementsArr = [];
        let isFormValid = true;
        for (let key in this.state.orderForm) {

            // TODO:
            // if (!isFormValid && this.state.orderForm[key].validation && !this.state.orderForm[key]) {
            //     this.setState({orderForm: {...orderForm, valid: false}});
            // }
            formElementsArr.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
                <form onSubmit={this.orderHandler}>
                    {formElementsArr.map(formElem => {
                        return <Input
                            key={formElem.id}
                            valid={formElem.config.valid}
                            elementType={formElem.config.elementType}
                            elementConfig={formElem.config.elementConfig}
                            value={formElem.config.value}
                            changed={event => this.inputChangedHandler(event, formElem.id) } />
                        })}
                    <Button btnType="Success">ORDER</Button>
                    {this.state.orderForm.valid
                        ? 'Please fill the required fields'
                        : null}
                </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;