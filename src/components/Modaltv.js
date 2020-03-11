import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const urlTV = "https://group-back-end.herokuapp.com/tv";

function Modaltv(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   console.log(this.props);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description}</Modal.Body>
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
