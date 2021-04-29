import React from 'react';
import PaymentForm from './card';
import './card-info.css';

class CardInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            name: '',
            cvc: '',
            expiry: '',
            results: '',
            numberError: '',
            nameError: '',
            cvcError: '',
            expiryError: '',
            focus: ''
        }
           
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.checkCardNumber = this.checkCardNumber.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCvcChange = this.handleCvcChange.bind(this);
        this.handleExpiryChange = this.handleExpiryChange.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleRetry = this.handleRetry.bind(this);
    }
    
    handleInputFocus = (event) => {
        this.setState({ focus: event.target.name });
    }

    handleNumberChange(event) {
        this.setState({ cardNumber: event.target.value })
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }

    handleCvcChange(event) {
        this.setState({ cvc: event.target.value })
    }

    handleExpiryChange(event) {
        this.setState({ expiry: event.target.value })
    }

    handleRetry = () => {
        this.setState  ({
            cardNumber: '',
            name: '',
            cvc: '',
            expiry: '',
            results: '',
            numberError: '',
            nameError: '',
            cvcError: '',
            expiryError: '',
            focus: ''
        })
    }

    checkCardNumber() {
        let card = this.state.cardNumber;
        card = card.split('').join(', ');
        const cardToArr = card.split(',').map(function(item) {
            return parseInt(item, 10);
        })

        cardToArr.slice();
        for (let i = (cardToArr.length - 2); i >= 0; i = i -2) {
            cardToArr[i] = cardToArr[i] * 2;
            if (cardToArr[i] > 9) {
                cardToArr[i] = cardToArr[i] -9;
            }
        }
        let arraySum = cardToArr.reduce((acc, cur) => acc + cur);
        if (arraySum % 10 === 0) {
            this.setState({results: 'This card is valid'})
        } else {
            this.setState({results: 'This card is not valid'})
        }
    }

    validateNumber = () => {
        const { cardNumber } = this.state;
        let num = /^[0-9]+$/;
        if(cardNumber.match(num)) {
            this.setState({
                numberError:
                    cardNumber.length < 12 ? '*Card Number should be between 12-19 digits' : null
            });
        } else {
            this.setState({
                numberError: '*Only numeric values allowed'
            });
        }

    }
    
    validateName = () => {
        const { name } = this.state;
        let alpha = /^[a-zA-Z\s]+$/;
        if(name.match(alpha)){
            this.setState({
            nameError:
                name.length < 1 ? '*Name field can\'t be empty' : null
        });
        }
        else{
        this.setState({
            nameError: '*Not a valid name'
       });
      }
    }

    validateCVC = () => {
        const { cvc } = this.state;
        let num = /^[0-9]+$/;
        if(cvc.match(num)){
            this.setState({
                cvcError:
                    cvc.length < 3 || cvc.length > 4 ? '*CVC should be of 3-4 digits' : null
        });

        }
        else{
        this.setState({
            cvcError: '*Only numeric values are allowed'
       });
      }
    }

    validateExpiry = () => {
        const { expiry } = this.state;
        let date = new Date();
        let year = date.getFullYear();
        let number = /^[0-9]+$/;
        if (expiry.match(number)) {
            this.setState ({ 
                expiryError:
                    expiry.length !== 4 ? '*Specified format "MMYY" is not satisfied' : Number(expiry.slice(0,2)) > 12 || Number('20' + expiry.slice(2,4)) < year ? 'Invalid Date' : null 
            });
        } else {
            this.setState({
                expiryError: '*Only numeric values allowed'
            });
        }
    }

    render() {
        return(
            <div className="validator-container">
                <p className='result-info'>{this.state.results}</p>

                <div>
                    <input
                        type="tel"
                        name="expiry"
                        className={`form-control ${this.state.expiryError ? 'is-invalid' : ''}`}
                        required
                        value={this.state.expiry}
                        onChange={this.handleExpiryChange}
                        onFocus={this.handleInputFocus}
                        onBlur={this.validateExpiry}
                        placeholder="Expiration mmyy" 
                    />
                    <div className='invalid-feedback error-msg'>{this.state.expiryError}</div>
                </div>

                <div>
                    <input
                        type="tel"
                        name="cvc"
                        className= {`form-control ${this.state.cvcError ? 'is-invalid' : ''}`}
                        required
                        value={this.state.cvc}
                        onChange={this.handleCvcChange}
                        onFocus={this.handleInputFocus}
                        onBlur={this.validateCVC}
                        placeholder="cvc Code" 
                    />
                    <div className='invalid-feedback error-msg'>{this.state.cvcError}</div>
                </div>      

                <div>
                    <input
                        name="Number"
                        type="tel"
                        className={`form-control ${this.state.numberError ? 'is-invalid' : ''}`}
                        required
                        value={this.state.cardNumber}
                        onChange={this.handleNumberChange}
                        onFocus={this.handleInputFocus}
                        onBlur={this.validateNumber}
                        placeholder="Please enter card number" 
                    />
                    <div className='invalid-feedback error-msg'>{this.state.numberError}</div>
                </div>

                <div>
                    <input 
                        name="Name"
                        type="text"
                        className= {`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
                        required
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        onFocus={this.handleInputFocus}
                        onBlur={this.validateName}
                        placeholder="Full Name" 
                    />
                    <div className='invalid-feedback error-msg'>{this.state.nameError}</div>
                </div>

                

                

                <div className='button-container'>
                    <button type="submit" className='button' disabled={!this.state.cardNumber || !this.state.name || !this.state.cvc || !this.state.expiry} onClick={this.checkCardNumber}>Validate</button>
                    <button type="submit" className='button' onClick={this.handleRetry} >Reset</button>
                </div>

                <div>
                    <PaymentForm
                    cardNumber={this.state.cardNumber}
                    name={this.state.name}
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focus={this.state.focus} />
                </div>
                
            </div>

            
        )
    }
}

export default CardInfo;