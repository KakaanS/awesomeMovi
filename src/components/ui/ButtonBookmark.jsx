import "../../mobilecss/button-bookmark.css";

const ButtonBookmark = ({ children, onClick }) => {
  return (
    <button className="buttonBookmarkStyle" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonBookmark;
