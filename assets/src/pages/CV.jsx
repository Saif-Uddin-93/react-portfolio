// import { useState } from 'react'
import React from "react";
//import "./style.css";
function CV() {
  return (
    <div className="cv">
      CV
      <div className="d-flex justify-content-center">
        <iframe id="CV" src="./CV.pdf#navpanes=0&zoom=100" style={{"height":"50rem", "width":"60%" }}></iframe>
      </div>
    </div>
  );
}

export default CV;