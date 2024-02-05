// import { useState } from 'react'
import React from "react";
import "./style.css";

function Test() {
  return (
    <div className="test">
      Main
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}

export default Test;