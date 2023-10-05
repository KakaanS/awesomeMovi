import "../../mobilecss/button-bookmark.css";

const ButtonBookmark = ({ children, onClick }) => {
  return (
    <button className="button-bookmark-style" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonBookmark;
