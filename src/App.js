import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import BaseRouter from "./BaseRouter";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseRouter />
      </BrowserRouter>
    );
  }
}

export default App;
