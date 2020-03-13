import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import homeImage from "../assets/homeImage.jpg";
import Button from "../component/buttons/Button";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .jumbotron {
    background: url(${homeImage}) no-repeat bottom rgba(0, 0, 0, 0.8);

    background-size: cover;
    height: 100vh;
  }
  * {
    margin: 0;
    padding: 0;
  }
  p {
    font-size: 20px;
    padding-top: 20px;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: "Secular One", sans-serif;
    font-size: 40px;
    color: white;
    padding-top: 100px;
  }
  .buttContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 150px;
    font-family: "Secular One", sans-serif;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      {/* <div className="overlay"></div> */}
      <div className="info">
        <h1>TRENDFLIX</h1>
        <p>
          See which shows and movies are trending, then make your list to watch
          later!
        </p>
      </div>
      <div className="buttContainer">
        <Link to="/Movies">
          <Button label="Movies" white />
        </Link>
        <br />

        <br />
        <Link to="/Shows">
          <Button label="Shows" white />
        </Link>
        <br />

        <br />
        <Link to="/Library">
          <Button label="Library" white />
        </Link>
      </div>
    </Jumbo>
  </Styles>
);
