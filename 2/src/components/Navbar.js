import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

// Import icon from react-icons
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  // Set biến để lưu giá trị click
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navBar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <GiRocketThruster className="navbar-icon" />
            River
          </Link>

          {/* Icon thay đổi tùy vào state on/off */}
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              {/* isActive là 1 prop của Navlink, nếu mục đó đang được chọn tức isActive = true */}
              <NavLink
                to="/"
                className={(isActive) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              {/* isActive là 1 prop của Navlink, nếu mục đó đang được chọn tức isActive = true */}
              <NavLink
                to="/about"
                className={(isActive) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              {/* isActive là 1 prop của Navlink, nếu mục đó đang được chọn tức isActive = true */}
              <NavLink
                to="/contact"
                className={(isActive) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
