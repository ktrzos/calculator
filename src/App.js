import React, {Component} from 'react';
import './App.css';
import Button from './components/Button/Button';
import math from 'mathjs';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };

        this.buttonClickHandler = this.buttonClickHandler.bind(this);
    }

    buttonClickHandler(e) {
        e.preventDefault();

        let character = e.target.innerHTML;

        switch(character) {
            case 'CE':
                this.setState({
                    input: ''
                });
                break;
            case '=':
                this.setState({
                    input: App.calculate(this.state.input)
                });
                break;
            default:
                this.setState({
                    input: this.state.input + character
                });
        }
    }

    /**
     * @param {string} expr
     * @returns {number}
     */
    static calculate(expr) {
        return math.eval(expr);
    }

    render() {
        let board_items = [
            7, 8, 9, 'CE',
            4, 5, 6, '-', '+', '=',
            1, 2, 3, '/', '*',
            0, ',', '%', '(', ')',
        ];

        return (
            <div className="calculator">
                <div className="calculator__input">
                    <input name="input" type="text" value={this.state.input}/>
                </div>
                <div className="calculator__board">
                    {board_items.map(item => {
                        return <Button
                            key={item}
                            label={item}
                            onClickHandler={this.buttonClickHandler}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default App;
