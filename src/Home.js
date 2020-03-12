import React, { Component }from 'react'
import { Jumbotron } from "./components/Jumbotron"
import './components/Home.css';



class Home extends Component {
    render() {
        return (
    
        <div class="Home">
        <Jumbotron />
        <h2>Just testing the homepage</h2>
        <p>should work</p>
    </div>
    );
}
}


export default Home;