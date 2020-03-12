import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import homeImage from "../assets/homeImage.jpg";
import Button from "../component/buttons/Button";
import  { Link } from 'react-router-dom';

const Styles = styled.div`
    .jumbotron {
        background: url(${homeImage}) no-repeat fixed bottom rgba(0, 151, 19, 0.7);
        background-size: cover;
        height: 100vh;
        position: relative;
        
      
     
    }


  .overlay {
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  h1 {
      font-size: 30px;
      color: white;
      font-family: Helvetica;
  }

  p {
    font-size: 20px;
    color: white;
    font-family: Helvetica;
  }
  .info {
      text-align: center;
  } 
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container className= "info">
        <h1>Welcome To TrendGetters</h1>
        <p>Come in and see which shows and movies are trending</p>
        <Link to="/Movies">
        <Button label="Movies" white />
        </Link>
        <Link to="/Shows">
        <Button label="Shows" white />
        </Link>
        <Link to="/Library">
        <Button label="Library" white />
        </Link>
      </Container>
    </Jumbo>
  </Styles>
);
