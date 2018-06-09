import React, {Component} from 'react';
import './App.css';
import Button from './components/Button/Button'

class App extends Component {
    render() {
        return (
            <div className="calculator">
                <div className="calculator__input">
                    <input name="input" type="text" value="" />
                </div>
                <div className="calculator__board">
                    <Button label={'7'}/>
                    <Button label={'8'}/>
                    <Button label={'9'}/>
                    <Button label={'+'}/>
                    <Button label={'4'}/>
                    <Button label={'5'}/>
                    <Button label={'6'}/>
                    <Button label={'-'}/>
                    <Button label={'1'}/>
                    <Button label={'2'}/>
                    <Button label={'3'}/>
                    <Button label={'/'}/>
                    <Button label={'0'}/>
                    <Button label={','}/>
                    <Button label={'*'}/>
                </div>
            </div>
        );
    }
}

export default App;
