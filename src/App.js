import React from 'react';
import './App.css';
import CardInfo from './Components/card-info';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//Dont forget to use the Google fonts poppins and work sans
class App extends React.Component {
  render() {
    return (
      <div className="body-container">

        <div className="app-container">
          <div className="title-container">
            <h1>Credit Card Validator</h1>
          </div>

          <div className="card-info-container">
            <CardInfo />
          </div>

          <div className="app-footer-container">
            <p>*Please note this site does not store any credit card information*</p>
          </div>
        </div>

        <div className="footer">
          <a href="https://www.linkedin.com/in/mark-novak-56679949/" className="linkedin social" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://manovak24.github.io/" rel="noopener noreferrer" target="_blank">
            <p>Mark Novak</p>
          </a>
          
          <a href="https://github.com/manovak24" className="github social" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          
        </div>

      </div>
      
    )
  }
}

export default App;