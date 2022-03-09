import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import FavList from './components/FavList/FavList';
export default function App() {

  return (
<>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/fav" element={<FavList />} />
  </Routes>
  </>
  )
}