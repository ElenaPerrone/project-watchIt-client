import React, { Component, Fragment } from "react";
// import "./App.css";
import { setUser } from './store/actions'
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ErrorHandler from "./components/ErrorHandler/ErrorHandler";
import Toolbar from "./components/Toolbar/Toolbar";
import Backdrop from "./components/Backdrop/Backdrop";
import MainNavigation from "./components/Navigation/MainNavigation";
import axios from "axios";
import SeriesList from "./utils/SeriesList";

class App extends Component {
  state = {
    showBackdrop: false,
    showMobileNav: false,
    isAuth: false,
    token: null,
    userId: null,
    authLoading: false,
    error: null,
    user: {},
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler();
      return;
    }
    const userId = localStorage.getItem("userId");
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    this.setState({ isAuth: true, token: token, userId: userId });
    this.setAutoLogout(remainingMilliseconds);
  }

  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
  };

  loginHandler = (user) => {
    this.setState({ authLoading: true });
    axios({
      method: "POST",
      url: "http://localhost:3000/user/login",
      data: user,
    })
      .then((response) => {
        localStorage.setItem("token:", response.data.token);
        console.log("Login -> response", response);

        if (response.status === 422) {
          throw new Error("Validation failed.");
        }
        if (response.status !== 200 && response.status !== 201) {
          console.log("Error!");
          throw new Error("Could not authenticate you!");
        }
        return response;
      })
      .then((resData) => {
        this.setState({
          isAuth: true,
          token: resData.data.token,
          authLoading: false,
          userId: resData.data.userId,
          user: resData.data.user,
        });
        localStorage.setItem("token", resData.data.token);
        localStorage.setItem("userId", resData.data.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false,
          error: err,
        });
      });
  };

  signupHandler = (user) => {
    this.setState({ authLoading: true });
    axios({
      method: "POST",
      url: "http://localhost:3000/user/signup",
      data: user,
    })
      .then((response) => {
        console.log("SignUp -> response", response);

        if (response.status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (response.status !== 200 && response.status !== 201) {
          console.log("Error!");
          throw new Error("Creating a user failed!");
        }
        return response;
      })
      .then((resData) => {
        console.log(resData);
        this.setState({
          isAuth: true,
          token: resData.data.token,
          authLoading: false,
          userId: resData.data.userId,
          user: resData.data.user,
        });
        localStorage.setItem("token", resData.data.token);
        localStorage.setItem("userId", resData.data.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false,
          error: err,
        });
      });
  };

  setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };

  errorHandler = () => {
    this.setState({ error: null });
  };

  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login
              {...props}
              onLogin={this.loginHandler}
              loading={this.state.authLoading}
            />
          )}
        />
        <Route path="/library"  render={(props) => (
            <SignUp
              {...props}
              onSignup={this.signupHandler}
              loading={this.state.authLoading}
            />
          )} 
        />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <SignUp
              {...props}
              onSignup={this.signupHandler}
              loading={this.state.authLoading}
            />
          )} 
        />
        <Redirect to="/profile" />
      </Switch>
    );
    if (this.state.isAuth) {
      routes = (
        <Switch>
          <Route
            path="/profile"
            exact
            render={(props) => (
              <Profile
                user={this.state.user}
                userId={this.state.userId}
                token={this.state.token}
                component={Profile}
              />
            )}
          />
          <Route
            path="/library"
            exact
            render={(props) => (
              <SeriesList
                user={this.state.user}
                userId={this.state.userId}
                token={this.state.token}
                component={SeriesList}
              />
            )}
          />
        </Switch>
      );
    }
    return (
      <Fragment>
        {this.state.showBackdrop && (
          <Backdrop onClick={this.backdropClickHandler} />
        )}
        <ErrorHandler error={this.state.error} onHandle={this.errorHandler} />
        <Toolbar>
          <MainNavigation
            onLogout={this.logoutHandler}
            isAuth={this.state.isAuth}
          />
        </Toolbar>
        {routes}
        {/* {!this.state.user._id && ( */}
        {/* <LandingPage /> */}
        {/* ) } */}
      </Fragment>
    );
  }
}

export default App;
