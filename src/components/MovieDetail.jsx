import Navbar from "../components/ui/Navbar";
import TwoColumnLayout from "./ui/TwoColumnLayout";
import TitleLine from "./ui/TitleLine";
import TextParagraph from "./ui/TextParagraph";
import BookMark from "./BookMarkButton";

const MovieDetail = ({ movie }) => {
  // Join the actors array with commas
  const actorsList = movie.actors.join(", ");
  return (
    <div>
      <Navbar />
      <TitleLine text={movie.title} />
      <TwoColumnLayout imageSrc={movie.thumbnail} imageAlt={movie.name}>
        <BookMark movie={movie} />
        <div className="movie-detail-info">
          <TextParagraph>RATING:</TextParagraph>
          {movie.rating}
          <TextParagraph>ACTORS: </TextParagraph>
          {actorsList}
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
