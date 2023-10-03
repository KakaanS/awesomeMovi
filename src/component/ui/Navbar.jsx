import { Link } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../../context/AuthCtx";

const Navbar = () => {
  const navbarStyle = {
    padding: "10px 0",
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
  };

  const liStyle = {
    margin: "0 20px",
  };

  const linkStyle = {
    textTransform: "uppercase",
    color: "#fff",
    fontWeight: 800,
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const handleHomeClick = () => {
    console.log("clicked");
    if (location.pathname === "/awesomeMovi/") {
      window.location.reload();
    }
  };

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link
            to="/awesomeMovi/"
            style={linkStyle}
            className="link"
            onClick={handleHomeClick}
          >
            HOME
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/awesomeMovi/categories" style={linkStyle} className="link">
            CATEGORY
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/awesomeMovi/bookmark" style={linkStyle} className="link">
            BOOKMARKS
          </Link>
        </li>
        <li style={liStyle}>
          <Button text="Log Out" onClick={handleLogout} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
