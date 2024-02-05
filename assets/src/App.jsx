// import { useState } from 'react'
import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import CV from "./pages/CV";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/cv" element={<CV/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;