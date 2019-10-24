import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./layout";
import { Routes } from "./router";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout router={Routes} />
    </Router>
  );
}

export default App;
