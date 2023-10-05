import { Link } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../../context/AuthCtx";
import "../../mobilecss/navbar.css";

const Navbar = () => {
  const { logout } = useAuth();

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
    </nav>
  );
};
export default Navbar;
