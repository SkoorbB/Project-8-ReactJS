import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import homeImage from "../assets/homeImage.jpg";
import Button from "../component/buttons/Button";

const Styles = styled.div`
<<<<<<< HEAD
    .jumbotron {
        background: url(${homeImage}) no-repeat fixed bottom;
        background-size: cover;
        height: 500px;
        position: relative;
        font-family: 'Helvetica Neue', Helvetica;
        color: white;
        font-size: 30px;
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
=======
  .jumbotron {
    background: url(${homeImage}) no-repeat fixed bottom;
    background-size: cover;
    height: 500px;
    position: relative;
    color: red;
  }
>>>>>>> master

  .overlay {
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome To TrendGetters</h1>
        <p>Come in and see which shows and movies are trending</p>
        <Button label="Enter" white />
      </Container>
    </Jumbo>
  </Styles>
);
