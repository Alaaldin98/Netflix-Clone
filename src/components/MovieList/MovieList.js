import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from '../ModalMovie/ModalMovie';
import {useState} from 'react';

let MovieList = ({Movies}) => {
    const [chosenMovie, setChosenMovie] = useState()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handelChosenMovie(Movie){
    setChosenMovie(Movie);
    handleShow();
  };
    return(
        <>
        {
            Movies.map(Movie => {
                return(
                    
                    <div key={Movie.id}>
                    <Card   style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Movie.image} />
                    <Card.Body>
                      <Card.Title> Title: {Movie.title}</Card.Title>
                      {/* <Card.Img>{Movie.poster_path}</Card.Img> */}
                      <Card.Title>overview:{Movie.overview}</Card.Title>
                      <Card.Text>
                        {Movie.summary}
                      </Card.Text>
                      <Button variant="primary" onClick={() => handelChosenMovie(Movie)}>Add to Fav</Button>
                    </Card.Body>
                  </Card>

                   
                    </div>
                )
            })
            
        }
        {chosenMovie && <ModalMovie Movie={chosenMovie} show={show} handleClose={handleClose}/>}
        </>
    )
};

export default MovieList;