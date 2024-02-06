// import { useState } from 'react'
import React from "react";
//import "./style.css";
function CV() {
  return (
    <div className="cv">
      CV
      <iframe id="CV" src="./CV.pdf#navpanes=0&zoom=100" style={{"height":"80vh", "width":"75%" }}></iframe>
      
    </div>
  );
}

export default CV;