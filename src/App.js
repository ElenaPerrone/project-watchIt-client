import React, { Component } from "react";
// import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />



      </div>
    );
  }
}

export default App;
