import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import "./NavItems.css";

const navItems = [
  { id: "landing",icon: <HomeIcon />, link: "/", auth: false },
  { id: "library", icon: <VideoLibraryIcon />, link: "/library", auth: true },
  { id: "profile",text: "Profile", link: "/profile", auth: true },
  { id: "login", text: "Login", link: "/login", auth: false },
  { id: "signup", text: "Signup", link: "/signup", auth: false },

];

const navigationItems = (props) => [
  ...navItems
    .filter((item) => item.auth === props.isAuth)
    .map((item) => (
      <li key={item.id} className={["navigation-item"].join(" ")}>
        <NavLink to={item.link} exact onClick={props.onChoose}>
          {item.text}
        </NavLink>
      </li>
    )),
  props.isAuth && (
    <li className="navigation-item" key="logout">
      <button onClick={props.onLogout}>Logout</button>
    </li>
  ),
];

export default navigationItems;
