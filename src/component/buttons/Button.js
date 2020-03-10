import React from 'react';
import './Button.css';

const Button = (props) => {
    let classList=''

    if (props.white) {
        classList += ` button-white`
    }

    return <button className={classList}
    src={props.icon}>
    {props.label}
    </button>
}

export default Button;