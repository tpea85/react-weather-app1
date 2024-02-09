import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
  <div className="App">
    <div className="container">
   <Weather />
    <footer>
This project was coded by Talancia Pea and is {""}
    <a 
    href="https://github.com/tpea85/react-weather-app1/tree/master"
    target="_blank"
    >open-sourced on GitHub.</a>
    </footer> 
  </div>
  </div>
  );
}


