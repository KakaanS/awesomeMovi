const ButtonBookmark = ({ children, onClick }) => {
  const buttonBookmarkStyle = {
    backgroundColor: "#008E7E",
    color: "#fff",
    cursor: "pointer",
    textTransform: "uppercase",
    borderRadius: "0px",
    padding: "7px",
  };

  return (
    <button style={buttonBookmarkStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonBookmark;
