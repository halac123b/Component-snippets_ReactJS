import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

// Import icon from react-icons
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  return (
    <>
      <nav className="navBar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <GiRocketThruster className="navbar-icon" />
            River
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
