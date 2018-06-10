import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    /**
     * @returns {string}
     */
    const buttonCssClass = (buttonLabel) => {
        let classModifier = buttonLabel;

        if(buttonLabel.length === 1) {
            classModifier = buttonLabel.charCodeAt(0);
        } else if(typeof buttonLabel === 'string') {
            classModifier = classModifier.toLowerCase();
        }

        return 'calculator__button calculator__button--' + classModifier;
    };

    return (
        <button
            className={buttonCssClass(props.label)}
            onClick={props.onClickHandler}
        >
            {props.label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onClickHandler: PropTypes.func
};

export default Button;
