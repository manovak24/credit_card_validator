import React from 'react';

class CardInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            results: ''
        }

        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    handleNumberChange(event) {
        this.setState({ cardNumber: event.target.value })
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
            this.setState({results: 'Working'})
        } else {
            this.setState({results: 'Not Working'})
        }
    }  

    render() {
        return(
            <div className="card-validator">
                <input
                onChange={this.handleNumberChange}
                placeholder="Please enter card number" />
                <button onClick={this.handleSearch} className="validate-button">Validate</button>

                <p>{this.state.results}</p>
            </div>
        )
    }
}

export default CardInfo;