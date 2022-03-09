import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import swal from "sweetalert";

export default function Favlist() {
    const [loading, setLoading] = useState(false);

    const [movies, setMovies] = useState(null);
    async function getData() {
        let response = await fetch(`${process.env.REACT_APP_SERVER}/getMovie`);
        let data = await response.json();
        console.log(data);
        setMovies(data);

    };
    useEffect(() => {
        getData();

    }, []);
    function handelDelete(id) {
        const url = `${process.env.REACT_APP_SERVER}/getMovie/deleteFavMovie/${id}`;
        const response = fetch(url, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc
        }).then(() => {
            getData();
        });
    }
    if (loading) {
        return <p>Data is loading...</p>;
      }

    return (
        <div>

            {movies && movies.data.map((movies)=>{
        return (<Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title> Title: {movies.title}</Card.Title>
                <Card.Title>Comment :{movies.comment}</Card.Title>
                <Card.Text style={{ overflowY: "scroll", maxHeight: "100px" }}>
                    {movies.summary}
                </Card.Text>
                <Button onClick={() => handelDelete(movies.id)} variant="primary">
                    Delete
                </Button>
                <Button onClick={() => handelDelete(movies.id)} variant="primary">
                   Update
                </Button>
            </Card.Body>
        </Card >)
    })
    } 
    
            </div >


    );
}