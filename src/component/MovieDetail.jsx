import Navbar from "../component/ui/Navbar";
import TwoColumnLayout from "./ui/TwoColumnLayout";
import TitleLine from "./ui/TitleLine";
import TextParagraph from "./ui/TextParagraph";
import BookMark from "./BookMarkButton";
import "../mobilecss/movie-detail.css"

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail-container">
      <Navbar />
      <TitleLine text={movie.title} />
      <TwoColumnLayout imageSrc={movie.thumbnail} imageAlt={movie.name}>
        <BookMark movie={movie} />
        <div className="movie-detail-text">
          <TextParagraph>RATING:</TextParagraph> {movie.rating}
          <TextParagraph>ACTORS: </TextParagraph> {movie.actors}
          <TextParagraph>GENRE: </TextParagraph>
          {movie.genre}
          <TextParagraph>SYNOPSIS: </TextParagraph>
          {movie.synopsis}
        </div>
      </TwoColumnLayout>
    </div>
  );
};

export default MovieDetail;
