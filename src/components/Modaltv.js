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
      <Button variant="primary" className="modalbutton" onClick={handleShow}>
        Info
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.description} <br /> <br />
          Rating: {props.rating} <br /> <br />
          Release Date: {props.releaseDate}
        </Modal.Body>
        <Modal.Footer>
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
