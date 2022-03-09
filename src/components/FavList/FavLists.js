import { useState, useEffect } from "react";
import FavList from "./FavList"
import Navbar from "../Navbar/Navbar.js";
export default function FavLists() {
    const [favMovies, setFavMovie] = useState([]) 
    async function getFavMovie() {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/favMovies`)
        const data = await response.json();
        setFavMovie(data)
    }
    useEffect(() => {
        getFavMovie();

    }, [])
    console.log(favMovies)
    return (
        <>
            <h1>FavMovies Page</h1>
            <Navbar />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                }}
            >
                {favMovies &&
                    favMovies.map((data) => {
                        return (
                            <FavList
                                key={data.id}
                                data={data}
                                getFavMovie={getFavMovie}
                            />
                        );
                    })}
            </div>
        </>
    )
}