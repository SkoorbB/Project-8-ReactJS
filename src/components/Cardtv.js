import React, { useState } from "react";
import "./Cardtv.css";
import { Card, Modal, Button } from "react-bootstrap";
import Modaltv from "./Modaltv";

const urlTV = "https://group-back-end.herokuapp.com/tv";

class Cardtv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tvData: []
    };
  }

  componentDidMount() {
    fetch(urlTV)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(tvData => {
        console.log(tvData);
        this.setState({ tvData: tvData });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    let tvShows = this.state.tvData.map(item => {
      return (
        <div className="tvshows" key={item.id}>
          <Card
            style={{
              width: "15rem",
              border: "none"
            }}
          >
            <Card.Img variant="top" src={item.image} />
            <Card.Body className="cardfooter">
              <Card.Title></Card.Title>
              <Modaltv
                description={item.description}
                title={item.title}
                rating={item.rating}
                releaseDate={item.releaseDate}
              />
            </Card.Body>
          </Card>
        </div>
      );
    });
    return <div className="tvContainer">{tvShows}</div>;
  }
}

export default Cardtv;
