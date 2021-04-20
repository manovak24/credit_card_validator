import React from 'react';
import PaymentForm from './card';

class CardInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            name: '',
            cvc: '',
            expiry: '',
            results: '',
            nameError: '',
            cvcError: '',
            expiryError: '',
            focus: ''
        }
           
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.validateCardNumber = this.validateCardNumber.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCvcChange = this.handleCvcChange.bind(this);
        this.handleExpiryChange = this.handleExpiryChange.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
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

    validateCardNumber() {
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
            this.setState({results: 'valid'})
        } else {
            this.setState({results: 'not valid'})
        }
    }
    
    validateName = () => {
        const { name } = this.state;
        var alpha = /^[a-zA-Z\s]+$/;
        if(name.match(alpha)){
            this.setState({
            nameError:
                name.length < 1 ? 'Name field can\'t be empty' : null
        });
        }
        else{
        this.setState({
            nameError: 'Not a valid name'
       });
      }
    }

    validateCVC = () => {
        const { cvc } = this.state;
        var num = /^[0-9]+$/;
        if(cvc.match(num)){
            this.setState({
                cvcError:
                    cvc.length < 3 || cvc.length > 4 ? 'CVC should be of 3-4 digits' : null
        });

        }
        else{
        this.setState({
            cvcError: 'Only numeric values are allowed'
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
                    expiry.length !== 4 ? 'Specified format "MMYY" is not satisfied' : Number(expiry.slice(0,2)) > 12 || Number('20' + expiry.slice(2,4)) < year ? 'Invalid Date' : null 
            });
        } else {
            this.setState({
                expiryError: 'Only numeric values allowed'
            });
        }
    }

    render() {
        return(
            <div className="card-validator">
                <input
                required
                onChange={this.handleNumberChange}
                placeholder="Please enter card number" />

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
                        type="tel"
                        name="expiry"
                        className={`form-control ${this.state.expiryError ? 'is-invalid' : ''}`}
                        required
                        value={this.state.expiry}
                        onChange={this.handleExpiryChange}
                        onFocus={this.handleInputFocus}
                        onBlur={this.validateExpiry}
                        placeholder="Expiration mm/yy" 
                    />
                    <div className='invalid-feedback error-msg'>{this.state.expiryError}</div>
                </div>

                <button onClick={this.validateCardNumber} className="validate-button">Validate</button>

                <p>This card is {this.state.results}</p>

                <PaymentForm cardNumber={this.state.cardNumber}
                name={this.state.name}
                cvc={this.state.cvc}
                expiry={this.state.expiry}
                focus={this.state.focus} />
            </div>

            
        )
    }
}

export default CardInfo;