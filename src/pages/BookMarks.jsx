import MovieCard from '../component/ui/MovieCard'; 
import { useBookmark } from '../context/BookMarkCtx';
import Navbar from "../component/ui/Navbar";
import Title from '../component/ui/Title';
import TextParagraph from '../component/ui/TextParagraph';

const BookMarks = () => {
  const { bookmarks } = useBookmark(); 

  return (
    <div>
      <Navbar />
      <div>
      <Title text="Bookmarks" style={{ paddingLeft: 0 }} />
      {bookmarks?.length === 0 ? (
        <TextParagraph> No bookmarked movies in your list.</TextParagraph>
      ) : (
        <div>
          {bookmarks?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        
      )}
    </div>
    </div>
  );
};

export default BookMarks;
