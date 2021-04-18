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
            results: ''
        }

        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCvcChange = this.handleCvcChange.bind(this);
        this.handleExpiryChange = this.handleExpiryChange.bind(this);
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

    handleSearch() {
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

    render() {
        return(
            <div className="card-validator">
                <input
                onChange={this.handleNumberChange}
                placeholder="Please enter card number" />

                <input 
                onChange={this.handleNameChange}
                placeholder="Full Name" />

                <input 
                onChange={this.handleCvcChange}
                placeholder="cvc Code" />

                <input 
                onChange={this.handleExpiryChange}
                placeholder="Expiration mmyy" />

                <button onClick={this.handleSearch} className="validate-button">Validate</button>

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