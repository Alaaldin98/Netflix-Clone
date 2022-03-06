// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import ModalMovie from '../ModalMovie/ModalMovie';
// import {useState} from 'react';

// let MovieList = ({Movies}) => {
//     const [chosenMovie, setChosenMovie] = useState()
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   function handelChosenMovie(Movie){
//     setChosenMovie(Movie);
//     handleShow();
//   };
//     return(
//         <>
//         {
//             Movies.map(Movie => {
//                 return(
                    
//                     <div key={Movie.id}>
//                     <Card   style={{ width: '18rem', textAlign: 'center', marginBottom: '20px' }}>
//                     <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} />
//                     <Card.Body>
//                       <Card.Title> Title: {Movie.title}</Card.Title>
//                       <br></br>
//                     Release Date:{Movie.release_date}<br></br>
//                     <Card.Text>
//                         Overview:{Movie.overview}
//                     </Card.Text>
//                       <Button variant="primary" onClick={() => handelChosenMovie(Movie)}>Add to Fav</Button>
//                     </Card.Body>
//                   </Card>

                   
//                     </div>
//                 )
//             })
            
//         }
//         {chosenMovie && <ModalMovie Movie={chosenMovie} show={show} handleClose={handleClose}/>}
//         </>
//     )
// };

// export default MovieList;