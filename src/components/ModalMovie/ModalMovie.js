import React from 'react';
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import swal from 'sweetalert';

export default function ModalMovie({ ele, show, handleClose }) {

  function handleFormSubmit(e) {
    e.preventDefault();
    let comment = e.target.comment.value;
    // To send a POST request to save the recipe in our database as favorite recipe
    addToFavList(ele, comment)
}

async function addToFavList(Movie, comment){
  const url = `${process.env.REACT_APP_SERVER}/addFavMovie`
  // This should match the required data in the server
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
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify(data) // body data type must match "Content-Type" header
});
swal("Favorite Movie", "You added a new Movie", "success");
handleClose();
console.log(response);
}


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{ele.title}</Modal.Title>
      </Modal.Header>
      {/* <Modal.Img>{Movie.poster_path}</Modal.Img> */}
      <Modal.Body>{ele.overview}</Modal.Body>
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
  );
}
