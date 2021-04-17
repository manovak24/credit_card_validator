import React from 'react';
import './App.css';
import CardInfo from './Components/card-info';


//Dont forget to use the Google fonts poppins and work sans
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <CardInfo />
      </div>
      
    )
  }
}

export default App;