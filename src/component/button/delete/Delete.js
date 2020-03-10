import React from 'react';
import './Delete.css'

const Delete = (props) => {
    let classList=''

    if (props.base) {
        classList += ` delete-base`
    }

    return <div> 
    <div className={classList}>
    </div>
    </div>
}

export default Delete;