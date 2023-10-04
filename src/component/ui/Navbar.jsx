import { Link } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../../context/AuthCtx";
import "../../mobilecss/navbar.css";

const Navbar = () => {
  const { logout } = useAuth();

  const handleHomeClick = () => {
    if (location.pathname === "/awesomeMovi/") {
      window.location.reload();
    }
  };

  const handleLogout = () => {
    console.log("logout");
    logout();
    window.location.reload();
  };

  return (
    <nav className="navbarStyle">
      <ul className="ulStyle">
        <li className="liStyle">
          <Link
            to="/awesomeMovi/"
            className="linkStyle"
            onClick={handleHomeClick}
          >
            HOME
          </Link>
        </li>
        <li className="liStyle">
          <Link to="/awesomeMovi/categories" className="linkStyle">
            CATEGORY
          </Link>
        </li>
        <li className="liStyle">
          <Link to="/awesomeMovi/bookmark" className="linkStyle">
            BOOKMARKS
          </Link>
        </li>
        <li className="liStyle">
          <Button text="Log Out" onClick={handleLogout} />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
