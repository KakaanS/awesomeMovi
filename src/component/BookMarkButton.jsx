//import React, { useContext } from 'react';
import { useBookmark } from '../context/BookMarkCtx.jsx'; // Uppdatera sökvägen

const BookMark = ({ movie }) => {
  const { addToBookmarks, removeFromBookmarks, bookmarks } = useBookmark();

  const isBookmarked = bookmarks.some((bookmark) => bookmark.id === movie.id);

  //console.log("bokmärken här", bookmarks)

  const toggleBookmark = () => {
    if (isBookmarked) {
      removeFromBookmarks(movie);
      console.log(`Removed movie ${movie.title} from bookmarks`);

    } else {
      addToBookmarks(movie);
      console.log(`Added movie ${movie.title} to bookmarks`);
    }
  };

  return (
    <button onClick={toggleBookmark}>
      {isBookmarked ? '-' : '+'}
    </button>
  );
};

export default BookMark;
