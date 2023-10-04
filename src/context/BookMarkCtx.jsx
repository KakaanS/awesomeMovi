import { createContext, useContext, useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'bookmarks'; // Använd en nyckel för Local Storage


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

  // Ladda bokmärken från Local Storage när komponenten monteras
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setBookmarks(storedBookmarks);
  }, []);

  // Spara bokmärken i Local Storage varje gång de ändras
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

