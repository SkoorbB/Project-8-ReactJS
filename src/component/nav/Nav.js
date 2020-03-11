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
        <Header
        label="Movies"
        type="movies"
        />
        <Header 
        label="Shows"
        type="shows"
        />
    </nav>
    </div>
}

export default Nav;