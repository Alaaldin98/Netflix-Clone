import React from "react";
import { Card, Button } from "react-bootstrap";
import swal from 'sweetalert';
export default function FavList({ data, getFavMovie }) {
    function handelDelete(id) {
      swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
                const url = `${process.env.REACT_APP_SERVER}/deleteMovies/${id}`;
                fetch(url, { method: "DELETE" }).then(() => {
                    getFavMovie();
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />
                <Card.Body>
                    <Card.Title> Title: {data.title}</Card.Title>
                    <Card.Text> Your Comment: {data.comments}</Card.Text>
                    <Button variant="danger" onClick={() => handelDelete(data.id)}>Delete</Button>
                </Card.Body>
            </Card>
        </div>

    );
}