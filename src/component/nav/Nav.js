import React from 'react';
import './Nav.css';
import Header from '../header/Header';

const Nav = (props) => {
    let classList=''

    if (props.bar) {
        classList += ` nav-bar`
    }
    
    return <div> 
    <nav className={classList}>
        <Header
        label="TrendGetters" 
        />
    </nav>
    </div>
}

export default Nav;