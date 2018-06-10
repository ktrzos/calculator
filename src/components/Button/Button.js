import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        let className     = 'calculator__button';
        let classModifier = this.props.label;

        if(this.props.label.length === 1) {
            classModifier = this.props.label.charCodeAt(0);
        } else if(typeof this.props.label === 'string') {
            classModifier = classModifier.toLowerCase();
        }

        className += ' calculator__button--' + classModifier;

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
