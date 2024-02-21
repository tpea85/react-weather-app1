import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
  <div className="App">
    <div className="container">
   <Weather defaultCity ="New York" />
    <footer>
This project was coded by Talancia Pea and is {""}
    <a 
    href="https://github.com/tpea85/react-weather-app1/tree/master"
    target="_blank" rel="noreferrer"
    >open-sourced on GitHub.</a>
      <a
            href="https://chic-capybara-f48622.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
    </footer> 
  </div>
  </div>
  );
}


