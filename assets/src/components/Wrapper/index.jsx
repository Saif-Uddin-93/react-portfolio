import React from "react";
import "./style.css";
import { Route, Routes } from 'react-router-dom';
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Projects from "../../pages/Projects";
import CV from "../../pages/CV";

function Wrapper() {
  return (
  <main className="wrapper">
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/cv" element={<CV/>} />
    </Routes>
  </main>);
}

export default Wrapper;