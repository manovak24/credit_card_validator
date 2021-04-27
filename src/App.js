import React from 'react';
import './App.css';
import CardInfo from './Components/card-info';


//Dont forget to use the Google fonts poppins and work sans
class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="title-container">
          <h1>Credit Card Validator</h1>
        </div>

        <div className="card-info-container">
          <CardInfo />
        </div>

        <div className="footer-container">
          <p>*Please note this site does not store any credit card information*</p>
        </div>
      </div>
      
    )
  }
}

export default App;