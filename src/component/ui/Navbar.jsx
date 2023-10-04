import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../../context/AuthCtx";
import "../../mobilecss/navbar.css";

const Navbar = () => {
  const { logout } = useAuth();
  const [phoneMenuVisible, setPhoneMenuVisible] = useState(false);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.location.reload();
    }
  };

  const handleLogout = () => {
    console.log("logout");
    logout();
    window.location.reload();
  };

  const togglePhoneMenu = () => {
    setPhoneMenuVisible(!phoneMenuVisible);
  };
  return (
    <nav className="navbarStyle">
      <ul className="ulStyle">
        <li className="liStyle">
          <Link to="/" className="linkStyle" onClick={handleHomeClick}>
            HOME
          </Link>
        </li>
        <li className="liStyle">
          <Link to="/categories" className="linkStyle">
            CATEGORY
          </Link>
        </li>
        <li className="liStyle">
          <Link to="/bookmark" className="linkStyle">
            BOOKMARKS
          </Link>
        </li>
        <li className="liStyle">
          <Button text="Log Out" onClick={handleLogout} />
        </li>
      </ul>
      {/* Phone menu button (visible on phones) */}
      <div className="phoneMenuButton" onClick={togglePhoneMenu}>
        {/* Mobile menu button with three horizontal lines */}
        <div className="menuBar"></div>
        <div className="menuBar"></div>
        <div className="menuBar"></div>
      </div>

      {/* Phone menu (visible on phones when the button is clicked) */}
      {phoneMenuVisible && (
        <ul className="phoneMenu">
          <li className="phoneMenuItem">
            <Link to="/" className="linkStyle" onClick={handleHomeClick}>
              HOME
            </Link>
          </li>
          <li className="phoneMenuItem">
            <Link to="/categories" className="linkStyle">
              CATEGORY
            </Link>
          </li>
          <li className="phoneMenuItem">
            <Link to="/bookmark" className="linkStyle">
              BOOKMARKS
            </Link>
          </li>
          <li className="phoneMenuItem">
            <Button text="Log Out" onClick={handleLogout} />
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
