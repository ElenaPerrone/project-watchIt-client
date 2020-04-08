import React, { Component } from "react";
// import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
