import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Modaltv.css";

function Modaltv(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   console.log(this.props);
  return (
    <>
      <div className="buttons">
        {/* <Button size="sm" className="modalbutton" onClick={handleShow}>
          Info
        </Button> */}

        <i
          class="fas fa-question-circle"
          onClick={handleShow}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: "red"
          }}
        ></i>

        <i
          class="fas fa-plus-circle"
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

export default Modaltv;
