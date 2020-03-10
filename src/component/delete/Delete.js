import React from 'react';
import './Delete.css'

const Delete = (props) => {
    let classList=''
    let layout=''
    let top=''

    if (props.layout) {
        layout += ` delete-layout`
    }

    if (props.base) {
        classList += ` delete-base`
    }

    if (props.top) {
        top += ` delete-top`
    }

    return <div className={layout}> 
    <div className={top}></div>
    <div className={classList}></div>
    </div>
}

export default Delete;