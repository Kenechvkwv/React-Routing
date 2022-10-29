import React from "react";
import "./App.css";
import Nav from "./nav";
import About from "./about";
import Shop from "./shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Shop />
    </div>
  );
}

export default App;
