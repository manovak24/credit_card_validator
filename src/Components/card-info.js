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

    handleSearch(cardNumber) {
        let array = cardNumber; 
        for (let i = (array.length - 2); i >= 0; i = i - 2) {
        //console.log(array);
        array[i] = array[i] * 2; 
        if (array[i] > 9) {
            array[i] = array[i] - 9;
        } 
    }
        let arraySum = array.reduce((acc, cur) => acc + cur); 
        if (arraySum % 10 === 0) {
            this.setState({ results: 'Working' })  
        } else {
            this.setState({ results: 'Not Working' })
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