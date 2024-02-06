// import { useState } from 'react'
import "./App.css";
import React from 'react';
import Wrapper from "./components/Wrapper"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Wrapper />
        <Footer />
      </Router>
    </div>
  );
}

export default App;