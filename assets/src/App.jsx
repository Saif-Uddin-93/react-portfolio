// import { useState } from 'react'
import "./App.css";
import React from 'react';
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import CV from "./pages/CV";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Wrapper />
        <Footer />
      </div>
    </Router>
  );
}

export default App;