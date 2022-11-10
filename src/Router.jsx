import React from "react";
import Navbar from "./components/Navbar";
import FontUpload from "./Pages/FontUpload";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FontUpload />} />
      </Routes>
    </Router>
  );
};

export default Routers;
