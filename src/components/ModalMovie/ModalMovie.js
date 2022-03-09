import React from 'react';
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import swal from 'sweetalert';

export default function ModalMovie({ Movie, show, handleClose }) {

  function handleFormSubmit(e) {
    e.preventDefault();
    let comment = e.target.comment.value;
    addToFavList(Movie, comment)
}

async function addToFavList(Movie, comment){

  const url = `${process.env.REACT_APP_SERVER}/getMovie`


  const data = {
    title : Movie.title,
    release_date : Movie.release_date,
    poster_path : Movie.poster_path, 
    overview : Movie.overview, 
    comments : comment
  }
const response = await fetch(url, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
},[]);
swal("Favorite Movie", "You added a new Movie", "success");
handleClose();
console.log(response);
}


  return (
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{Movie.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{Movie.overview}</Modal.Body>

      <Modal.Footer>
        <Form onSubmit={handleFormSubmit}>
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
    </>
  );
}