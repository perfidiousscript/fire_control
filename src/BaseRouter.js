import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Console from "./Console";

class BaseRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" />
        <Route exact path="/console" component={Console} />
      </Switch>
    );
  }
}

export default BaseRouter;
