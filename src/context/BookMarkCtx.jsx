import { createContext, useContext, useState } from 'react';

const BookmarkContext = createContext();

export function useBookmark() {
  return useContext(BookmarkContext);
}

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  const addToBookmarks = (movie) => {
    setBookmarks((prevBookmarks) => {
      const newBookmarks = [...prevBookmarks, movie];
      console.log('Added to bookmarks:', newBookmarks); // Logga den uppdaterade arrayen
      return newBookmarks;
    });
    console.log("testar", bookmarks)
  };

  const removeFromBookmarks = (movie) => {
    setBookmarks((prevBookmarks) => {
      const newBookmarks = prevBookmarks.filter((bookmark) => bookmark.id !== movie.id);
      console.log('Removed from bookmarks:', newBookmarks); // Logga den uppdaterade arrayen
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
