import React, {Component} from 'react';
import './App.css';
import Button from './components/Button/Button';
import math from 'mathjs';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            inputError: false
        };

        this.buttonClickHandler = this.buttonClickHandler.bind(this);
    }

    buttonClickHandler(e) {
        e.preventDefault();

        let character = e.target.innerHTML;

        switch(character) {
            case 'CE':
                this.setState({
                    input: '',
                    inputError: false,
                });
                break;
            case '=':
                try {
                    this.setState({
                        input: App.calculate(this.state.input),
                        inputError: false
                    });
                } catch(e) {
                    if(e instanceof SyntaxError) {
                        this.setState({
                            inputError: true,
                        });
                    } else {
                        throw e;
                    }
                }
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
     * @throws SyntaxError
     */
    static calculate(expr) {
        /** @var {Function} math.eval */
        return math.eval(expr);
    }

    /**
     * @returns {string}
     */
    inputCssClass() {
        let className = 'calculator__input';

        if(this.state.inputError === true) {
            className += ' calculator__input--error';
        }

        return className;
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
                <input
                    className={this.inputCssClass()}
                    name="input"
                    type="text"
                    value={this.state.input}
                />
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
