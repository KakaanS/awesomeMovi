import MovieCard from "../components/ui/MovieCard";
import { useBookmark } from "../context/BookMarkCtx";
import Navbar from "../components/ui/Navbar";
import Title from "../components/ui/Title";
import TextParagraphBookmark from "../components/ui/TextParagraphBookmark";

const BookMarksPage = () => {
  const { bookmarks } = useBookmark();

  return (
    <div>
      <Navbar />

      <div>
        <Title text="Your Bookmarks" />
        {bookmarks?.length === 0 ? (
          <TextParagraphBookmark> No bookmarked movies in your list.</TextParagraphBookmark>
        ) : (
          <div data-testid="bookmarkCard">
            {bookmarks?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookMarksPage;
