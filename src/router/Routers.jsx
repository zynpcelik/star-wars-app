import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Favorites from "../pages/Favorites";
import { Routes, Route } from "react-router-dom";
import SpaceShipDetails from "../components/SpaceShipDetails";

function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/spaceshipdetails" element={<SpaceShipDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default Routers;
