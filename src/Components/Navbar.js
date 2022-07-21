import React,{ useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import "./components.css";
import * as FiIcon from "react-icons/fi";

export const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className="header-navbar">
      <div className="header-container">
        <div className="header-container-logo">
          <div className="navbar-img">
            <Link to="/" className="navbar-link">
              <img src={Logo}></img>
            </Link>
          </div>
          <div className="navbar-menu-wrapper">
            <button onClick={() => setmenuOpen(!menuOpen)}>
              <FiIcon.FiMenu />
            </button>
          </div>
        </div>
        <div className={`${menuOpen ? `navbar-wrapper navbar-wrapper-active` : `navbar-wrapper`} `}>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
