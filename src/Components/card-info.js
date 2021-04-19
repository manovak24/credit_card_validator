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
        }

        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.validateCardNumber = this.validateCardNumber.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCvcChange = this.handleCvcChange.bind(this);
        this.handleExpiryChange = this.handleExpiryChange.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
    }
    
    handleInputFocus = ({ target }) => {
        this.setState({
          focus: target.name,
        });
    };

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
        var alpha = /^[A-Za-z]+$/;
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

    render() {
        return(
            <div className="card-validator">
                <input
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

                <input 
                onChange={this.handleCvcChange}
                placeholder="cvc Code" />

                <input 
                onChange={this.handleExpiryChange}
                placeholder="Expiration mmyy" />

                <button onClick={this.validateCardNumber} className="validate-button">Validate</button>

                <p>This card is {this.state.results}</p>

                <PaymentForm cardNumber={this.state.cardNumber}
                name={this.state.name}
                cvc={this.state.cvc}
                expiry={this.state.expiry} />
            </div>

            
        )
    }
}

export default CardInfo;