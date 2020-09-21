import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <h1>Introtekst</h1>
      </div>
    </Router>
  );
}

export default App;
