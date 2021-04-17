import React from 'react';
import './App.css';
import CardInfo from './Components/card-info';
import ValidateCred from './Util/card-validator';


//Dont forget to use the Google fonts poppins and work sans
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      answer: []
    }

    this.updateCardNumber = this.updateCardNumber.bind(this);
    this.validate = this.validate.bind(this);
  }

  updateCardNumber(card) {
    this.setState({ cardNumber: card });
  }

  validate() {
    ValidateCred.validate(this.cardNumber).then(answer => {
      this.setState({ answer: answer })
    })
  }
  
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <CardInfo onNumberChange={this.updateCardNumber}
        onSearch={this.validate} />

        <p>You card is {this.asnwer}</p>
      </div>
      
    )
  }
}

export default App;