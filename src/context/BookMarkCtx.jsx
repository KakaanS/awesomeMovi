import { createContext, useContext, useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'bookmarks'; // Using key for Local storage


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

  // Load bookmarks from Local Storage 
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setBookmarks(storedBookmarks);
  }, []);

  // Save bookmarks in Local Storage when there is a change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

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

