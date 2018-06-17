import React, {Component} from 'react';
import './App.css';
import Button from './components/Button/Button';
import math from 'mathjs';

class App extends Component {
    /**
     * @param {array} props
     * @return void
     */
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            inputError: false
        };

        this.buttonClickHandler         = this.buttonClickHandler.bind(this);
        this.inputChangeHandler         = this.inputChangeHandler.bind(this);
        this.inputCalculateClickHandler = this.inputCalculateClickHandler.bind(this);
    }

    /**
     * @param {Object} e
     * @return void
     */
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
                this.calculate();
                break;
            default:
                this.setState({
                    input: this.state.input + character
                });
        }
    }

    /**
     * @param {Object} e
     * @return void
     */
    inputChangeHandler(e) {
        if(e.target.value.indexOf('=') === -1) {
            this.setState({
                input: e.target.value
            });
        }
    }

    /**
     * @param {Object} e
     * @return void
     */
    inputCalculateClickHandler(e) {
        if(e.keyCode === 13) { // "ENTER" key
            this.calculate();
        }
    }

    /**
     * @returns {number}
     */
    calculate() {
        try {
            let expr = this.state.input.replace('%', '/100');

            /** @var {Function} math.eval */
            const value = math.eval(expr);

            if(this.state.input !== '') {
                this.setState({
                    input: value,
                    inputError: false
                });
            }
        } catch(e) {
            if(e instanceof SyntaxError || e instanceof Error) {
                this.setState({
                    inputError: true,
                });
            } else {
                throw e;
            }
        }
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
                    autoFocus
                    className={this.inputCssClass()}
                    name="input"
                    type="text"
                    value={this.state.input}
                    onChange={this.inputChangeHandler}
                    onKeyUp={this.inputCalculateClickHandler}
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
