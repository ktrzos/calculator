import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        let className = 'CalculatorButton CalculatorButton--' + this.props.label;

        return (
            <button className={className}>
                {this.props.label}
            </button>
        );
    }
}

Button.propTypes = {
    label: PropTypes.string.isRequired
};

export default Button;
