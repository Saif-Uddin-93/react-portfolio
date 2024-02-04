// import { useState } from 'react'
import "./style.css";

function Main() {
  return (
    <main className="main">
      Main
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </main>
  );
}

export default Main;