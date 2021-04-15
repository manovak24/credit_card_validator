import React from 'react';

class CardValidator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.props.onNumberChange(event.target.value);
    }

    render() {
        return(
            <div className="card-validator">
                <input
                onChange={this.handleChange}
                onKeyPress={event => {
                    if (event.key === "Enter") {
                        this.search();
                    }
                }}
                placeholder="Please enter card number" />
                <button onClick={this.search} className="validate-button">Validate</button>
            </div>
        )
    }
}

export default CardValidator;