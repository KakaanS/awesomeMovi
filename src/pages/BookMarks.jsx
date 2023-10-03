import MovieCard from '../component/ui/MovieCard' // Uppdatera sökvägen till din MovieCard-komponent
import { useBookmark } from '../context/BookMarkCtx';

const BookMarks = ( ) => {
  const { bookmarks } = useBookmark(); // Hämta bokmärkta filmer från kontexten

  console.log('Bookmarks:', bookmarks);

  return (
    <div>
      <h1>Bookmarks</h1>
      {bookmarks.length === 0 ? (
        <p>No bookmarked movies in your list.</p>
      ) : (
        <div>
          {bookmarks.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookMarks;
