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

    handleSearch(card) {
        card = this.state.cardNumber;
        if (card === '4539677908016808'){
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