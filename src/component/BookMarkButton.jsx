import { useBookmark } from "../context/BookMarkCtx.jsx";
import ButtonBookmark from "./ui/ButtonBookmark.jsx";

const BookMark = ({ movie }) => {
  const { addToBookmarks, removeFromBookmarks, bookmarks } = useBookmark();

  const isBookmarked = bookmarks?.some((bookmark) => bookmark.id === movie.id);

  const toggleBookmark = () => {
    if (isBookmarked) {
      removeFromBookmarks(movie);
    } else {
      addToBookmarks(movie);
    }
  };

  return (
    <ButtonBookmark onClick={toggleBookmark}>
      {isBookmarked ? "-" : "+"}{" "}
    </ButtonBookmark>
  );
};

export default BookMark;
