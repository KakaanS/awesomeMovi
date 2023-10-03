import { useBookmark } from "../context/BookMarkCtx.jsx";

const BookMark = ({ movie }) => {
  const { addToBookmarks, removeFromBookmarks, bookmarks } = useBookmark();

  const isBookmarked = bookmarks.some((bookmark) => bookmark.id === movie.id);

  const toggleBookmark = () => {
    if (isBookmarked) {
      removeFromBookmarks(movie);
    } else {
      addToBookmarks(movie);
    }
  };

  return <button onClick={toggleBookmark}>{isBookmarked ? "-" : "+"}</button>;
};

export default BookMark;
