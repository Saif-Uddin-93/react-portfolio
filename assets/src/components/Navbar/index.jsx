import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar justify-content-center">
      <div id="navbarNav">
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/cv">CV</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;