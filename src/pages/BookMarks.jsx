import MovieCard from "../components/ui/MovieCard";
import { useBookmark } from "../context/BookMarkCtx";
import Navbar from "../components/ui/Navbar";
import Title from "../components/ui/Title";
import TextParagraph from "../components/ui/TextParagraph";

const BookMarksPage = () => {
  const { bookmarks } = useBookmark();

  return (
    <div>
      <Navbar />
      <div>
        <Title text="Your Bookmarks" style={{ paddingLeft: 0 }} />
        {bookmarks?.length === 0 ? (
          <TextParagraph> No bookmarked movies in your list.</TextParagraph>
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
