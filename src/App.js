import React from 'react';
import './App.css';
import CardValidator from './Components/card-validator';


//Dont forget to use the Google fonts poppins and work sans
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: ''
    }

    this.updateCardNumber = this.updateCardNumber.bind(this);
  }

  updateCardNumber(card) {
    this.setState({ cardNumber: card });
  }
  
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <CardValidator onNumberChange={this.updateCardNumber} />
      </div>
      
    )
  }
}

export default App;