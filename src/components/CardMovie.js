import React, { useState } from "react";
// import "./tvCard.css";
import { Card, Modal, Button } from "react-bootstrap";

const urlTV = "https://group-back-end.herokuapp.com/tv";

class Cardmovie extends React.Component {
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

  // modalTV() {
  //       const [show, setShow] = useState(false);

  //     const handleClose = () => setShow(false);
  //     const handleShow = () => setShow(true);
  //     }

  render() {
    let tvShows = this.state.tvData.map(item => {
      return (
        <div className="tvshows" key={item.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>

              {/* <Button variant="primary" onClick={this.modalTV().handleShow}>
                Launch demo modal
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal> */}
            </Card.Body>
          </Card>
        </div>
      );
    });
    return <div className="tvContainer">{tvShows}</div>;
  }
}

export default Cardmovie;
