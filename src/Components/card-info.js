import React from 'react';

class CardInfo extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
    }
    
    handleChange(event) {
        this.props.onNumberChange(event.target.value);
    }

    search(event) {
        this.props.onSearch();
    }

    render() {
        return(
            <div className="card-validator">
                <input
                onChange={this.handleChange}
                placeholder="Please enter card number" />
                <button onClick={this.search} className="validate-button">Validate</button>
            </div>
        )
    }
}

export default CardInfo;