import React from 'react';
import Cards from 'react-credit-cards';
import PropTypes from 'prop-types';
import 'react-credit-cards/es/styles-compiled.css';
 
export default class PaymentForm extends React.Component {
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.props.cvc}
          expiry={this.props.expiry}
          focused={this.props.focus}
          name={this.props.name}
          number={this.props.cardNumber}
        />
      </div>
    );
  }
};

PaymentForm.propTypes = {
  cvc: PropTypes.string.isRequired,
  expiry: PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
}