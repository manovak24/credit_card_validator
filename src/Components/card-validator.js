import React from 'react';

class CardValidator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: ''
        }

    }
    
    render() {
        return(
            <div className="card-validator">
                <input
                onKeyPress={event => {
                    if (event.key === "Enter") {
                        this.search();
                    }
                }}
                //onChange={this.handleTermChange}
                placeholder="Please enter card number" />
                <button onClick={this.search} className="validate-button">Validate</button>
            </div>
        )
    }
}

export default CardValidator;