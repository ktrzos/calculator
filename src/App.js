import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button'

class App extends Component {
  render() {
    return (
      <div className="Calculator">
          <div className="CalculatorBoard">
              <Button label={'7'}/>
              <Button label={'8'}/>
              <Button label={'9'}/>
              <Button label={'4'}/>
              <Button label={'5'}/>
              <Button label={'6'}/>
              <Button label={'1'}/>
              <Button label={'2'}/>
              <Button label={'3'}/>
              <Button label={'0'}/>
              <Button label={','}/>
          </div>
      </div>
    );
  }
}

export default App;
