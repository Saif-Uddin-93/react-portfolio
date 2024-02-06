// import { useState } from 'react'
import React from "react";
import "./style.css";
import Navbar from "../Navbar"
import Hero from "../Hero";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Header;