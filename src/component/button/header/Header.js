import React from 'react'
import './Header.css'

const header = (props) => {
    let classList=''

    if (props.text) {
        classList += ` header.text`
    }

    return <header className={classList}
    src={props.icon}>
    {props.label}
    </header>
}

export default header;