import * as React from "react";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" end>Home</Link>
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