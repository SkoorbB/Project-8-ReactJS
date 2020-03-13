import React, { Component } from 'react';
import '../components/Tav.css';

class Tav extends Component {
    render() {
        return (
        <div>
        <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">Movies</a></li>
  <li><a href="#contact">Shows</a></li>
  <li><a href="#about">Library</a></li>
    </ul>
    </div>
    );
}
}


export default Tav;