import React from 'react';
import './App.css';
import CardInfo from './Components/card-info';
import ValidateCred from './Util/card-validator';

//Dont forget to use the Google fonts poppins and work sans
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: ''
    }

    this.searchCard = this.searchCard.bind(this);
  }

  searchCard(cardNumber) {
    ValidateCred.validate(cardNumber).then(results => {
      this.setState({results: results})
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <CardInfo searchCard={this.searchCard} />
        <p>You card is {this.state.results}</p>
      </div>
      
    )
  }
}

export default App;