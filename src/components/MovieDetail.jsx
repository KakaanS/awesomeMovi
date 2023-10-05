import Navbar from "../components/ui/Navbar";
import TwoColumnLayout from "./ui/TwoColumnLayout";
import TitleLine from "./ui/TitleLine";
import TextParagraph from "./ui/TextParagraph";
import BookMark from "./BookMarkButton";

const MovieDetail = ({ movie }) => {
  return (
    <div>
      <Navbar />
      <TitleLine text={movie.title} />
      <TwoColumnLayout imageSrc={movie.thumbnail} imageAlt={movie.name}>
        <div>
          <TextParagraph>RATING:</TextParagraph>
          {movie.rating}
          <TextParagraph>ACTORS: </TextParagraph>
          {movie.actors}
          <TextParagraph>GENRE: </TextParagraph>
          {movie.genre}
          <TextParagraph>SYNOPSIS: </TextParagraph>
          {movie.synopsis}
        </div>
        <BookMark movie={movie} />
      </TwoColumnLayout>
    </div>
  );
};

export default MovieDetail;
