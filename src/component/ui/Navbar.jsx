import { Link } from "react-router-dom";

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
          <Link to="" style={linkStyle} className="link">
            BOOKMARKS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
