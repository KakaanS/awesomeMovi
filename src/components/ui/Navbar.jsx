import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../../context/AuthCtx";
import "../../mobilecss/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

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
    <nav className="navbar-style">
      <ul className="ul-style">
        <li className="li-style">
          <Link to="/" className="link-style" onClick={handleHomeClick}>
            HOME
          </Link>
        </li>
        <li className="li-style">
          <Link to="/categories" className="link-style">
            CATEGORY
          </Link>
        </li>
        <li className="li-style">
          <Link to="/bookmark" className="link-style">
            BOOKMARKS
          </Link>
        </li>
        <li className="li-style">
          <Button text="Log Out" onClick={handleLogout} />
        </li>
      </ul>
      {/* Phone menu button (visible on phones) */}
      <div className="phoneMenuButton" onClick={togglePhoneMenu}>
        {/* Mobile menu button with three horizontal lines */}

        {phoneMenuVisible ? (
          // X icon when menu is open.
          <FontAwesomeIcon className="i" icon={faX} />
        ) : (
          // Bars icon when menu is closed.
          <FontAwesomeIcon className="i" icon={faBars} />
        )}
      </div>

      {/* Phone menu (visible on phones when the button is clicked) */}
      {phoneMenuVisible && (
        <ul className="phoneMenu">
          <div className="closePhoneMenuButton" onClick={togglePhoneMenu}>
            <FontAwesomeIcon className="i" icon={faX} />
          </div>

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
