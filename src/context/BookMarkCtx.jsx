import { createContext, useContext, useState } from "react";

const BookmarkContext = createContext({
  bookmarks: [],
  addToBookmarks: () => {},
  removeFromBookmarks: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export function useBookmark() {
  return useContext(BookmarkContext);
}

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  const addToBookmarks = (movie) => {
    setBookmarks((prevBookmarks) => {
      const newBookmarks = [...prevBookmarks, movie];
      return newBookmarks;
    });
  };

  const removeFromBookmarks = (movie) => {
    setBookmarks((prevBookmarks) => {
      const newBookmarks = prevBookmarks.filter(
        (bookmark) => bookmark.id !== movie.id
      );
      return newBookmarks;
    });
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addToBookmarks, removeFromBookmarks }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
