import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        let className = 'calculator__button calculator__button--' + this.props.label;

        return (
            <button className={className} onClick={this.props.onClickHandler}>
                {this.props.label}
            </button>
        );
    }
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func
};

export default Button;
