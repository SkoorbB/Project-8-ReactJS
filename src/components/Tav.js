import React, { Component } from 'react';
import '../components/Tav.css';
import  { Link } from 'react-router-dom';

class Tav extends Component {
    render() {
        return (
        <div>
        <ul>
        <Link to="/Shows">
  <li><a class="active" href="#home">Home</a></li>
  </Link>
  <Link to="/">
  <li><a href="#movies">Movies</a></li>
  </Link>
  <Link to="/Shows">
  <li><a href="#shows">Shows</a></li>
  </Link>
  <li><a href="#library">Library</a></li>
    </ul>
    </div>
    );
}
}


export default Tav;