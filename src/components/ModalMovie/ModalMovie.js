import React from 'react';
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function ModalMovie({ Movie, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{Movie.title}</Modal.Title>
      </Modal.Header>
      {/* <Modal.Img>{Movie.poster_path}</Modal.Img> */}
      <Modal.Body>{Movie.overview}</Modal.Body>
      <Modal.Footer>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Comment</Form.Label>
            <Form.Control type="text" placeholder="Enter Comment" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}