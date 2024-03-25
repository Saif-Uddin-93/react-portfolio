import React from "react";
import "./style.css";
import { Route, Routes } from 'react-router-dom';
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Projects from "../../pages/Projects";
import CV from "../../pages/CV";
import Home from "../../pages/Home";

function Wrapper() {
  return (
  <main className="wrapper" style={{backgroundColor:'aqua'}}>
    <Routes>
      <Route path="/" end element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/cv" element={<CV/>} />
    </Routes>
  </main>
)};

export default Wrapper;