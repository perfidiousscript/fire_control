import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import BaseRouter from "./BaseRouter";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// const store = createStore(rootReducer);
import "./App.css";

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <BrowserRouter>
        <BaseRouter />
      </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;
