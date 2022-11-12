import React from "react";
import Navbar from "./components/Navbar";
import FontUpload from "./Pages/FontUpload";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowUploadedFonts from "./Pages/ShowUploadedFonts";
import ShowFontGroups from "./Pages/ShowFontGroups";
import CreateFontGroup from "./Pages/CreateFontGroup";

const Routers = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FontUpload />} />
        <Route path="/fonts" element={<ShowUploadedFonts />} />
        <Route path="/font-groups" element={<ShowFontGroups />} />
        <Route path="/create-groups" element={<CreateFontGroup />} />
      </Routes>
    </Router>
  );
};

export default Routers;
