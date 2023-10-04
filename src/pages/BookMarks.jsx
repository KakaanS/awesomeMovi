import MovieCard from "../component/ui/MovieCard"; // Uppdatera sökvägen till din MovieCard-komponent
import { useBookmark } from "../context/BookMarkCtx";
import Navbar from "../component/ui/Navbar";

const BookMarks = () => {
  const { bookmarks } = useBookmark(); // Hämta bokmärkta filmer från kontexten

  return (
    <div>
      <Navbar />
      <h1>Your Bookmarks</h1>
      {bookmarks?.length === 0 ? (
        <p>No bookmarked movies in your list.</p>
      ) : (
        <div>
          {bookmarks?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookMarks;
