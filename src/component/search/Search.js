import React from 'react';
import './Search.css'
import Form from '../form/Form'
import Button from '../buttons/Button'

const Search = (props) => {
    let classList=''

    if (props.grid) {
        classList += ` grid`
    }

    return <div className={classList}>
    <Form
    placeholder="Search"
    />
    <Button
    label="Search"
    white/>
    </div>
}

export default Search