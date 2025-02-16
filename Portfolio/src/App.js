import React from "react";
import "./index.css";
// import About from "./routes/About"
import Home from "./routes/Home"
// import Project from "./routes/Project"
// import Skills from "./routes/Skills"
// import Contact from "./routes/Contact"
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}  />
      {/* <Route path="/project" element={<Project />}  />
      <Route path="/About" element={<About />}  />
      <Route path="/contact" element={<Contact />}  />
      <Route path="/skills" element={<Skills />}  /> */}
    </Routes>
    </>
  );
}

export default App;
