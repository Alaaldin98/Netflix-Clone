import React from 'react';
import { useState, useEffect } from "react";
import MovieList from '../MovieList/MovieList';
// import Navbar from '../Navbar/Navbar'


export default function Home(){
    const [Movies, setMovies] = useState([]);
    
    async function getData(){
        let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
        let data = await response.json();

        setMovies(data);
            
    };

    useEffect(() => {
        getData();

    },[]);
    return(
        <>
        <h1>Welcome to Netflix</h1>
        {/* <Navbar /> */}
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", height:"100px"}}>
        {Movies && <MovieList Movies={Movies}/>}
        </div>
        </>
    )
};