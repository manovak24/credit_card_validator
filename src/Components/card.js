import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
 
export default class PaymentForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
      }
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.props.cvc}
          expiry={this.props.expiry}
          focused={this.state.focus}
          name={this.props.name}
          number={this.props.cardNumber}
        />
      </div>
    );
  }
};