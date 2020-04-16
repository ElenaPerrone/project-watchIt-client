import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import NavItems from "./NavItems";
import "./MainNavigation.css";
// import SeriesList from "../../utils/SeriesList";

const mainNavigation = (props) => (
  <nav className="main-nav">
    <div className="main-nav__logo">
      <Link to="/" >
        <HomeIcon color='disabled' style={{ fontSize: 30, padding: '5px' }} />
      </Link>
    </div>
    <div className="main-nav__logo">
      <Link to="/library">
        <VideoLibraryIcon color='disabled' style={{ fontSize: 30, padding: '5px' }} />
      </Link>
    </div>
    <div className="spacer" />
    <ul className="main-nav__items">
      <NavItems isAuth={props.isAuth} onLogout={props.onLogout} />
    </ul>
  </nav>
);

export default mainNavigation;
