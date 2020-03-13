import React, { useState } from "react";
import { Modal, Button, CardImg } from "react-bootstrap";
import "./Modalmovies.css";
import cardMovie from "./CardMovie";
import { CardBody } from "react-bootstrap/Card";

const urlTV = "https://group-back-end.herokuapp.com/movie";

let libraryData = [];
console.log(libraryData);

function Modalmovies(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const myList = () => libraryData.push(props.title);
  console.log(props);
  return (
    <>
      <div className="buttons">
        {/* <Button size="sm" className="modalbutton" onClick={handleShow}>
          Info
        </Button> */}

        <i
          className="fas fa-question-circle"
          onClick={handleShow}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: "red"
          }}
        ></i>

        <i
          className="fas fa-plus-circle"
          onClick={myList}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: "lightblue"
          }}
        ></i>
      </div>

      <Modal show={show} onHide={handleClose} centered className="modal">
        <Modal.Header
          closeButton
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Modal.Title className="modalhead">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
          {props.description} <br /> <br />
          Rating: {props.rating} <br /> <br />
          Release Date: {props.releaseDate}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  return <div className="modalContainer"></div>;
}

export default Modalmovies;
