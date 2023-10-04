import defaultImage from "../../noimage.png";
import BookMark from "../BookMarkButton";
import { Link } from "react-router-dom";
import "../../mobilecss/movie-card.css";

const MovieCard = ({ movie }) => {
  const handleBookmarkClick = (e) => {
    e.stopPropagation();
  };

  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} className="movie-link">
        <img
          src={movie.thumbnail || defaultImage}
          alt={movie.name}
          className="movie-image"
          onError={handleImageError}
        />
        <p className="movie-title">{movie.title}</p>
        <p className="movie-year">{movie.year} </p>
        <p className="movie-paragraph">{movie.rating}</p>
      </Link>
      <div className="bookmark-button">
        <BookMark movie={movie} onClick={handleBookmarkClick} />
      </div>
    </div>
  );
};

export default MovieCard;
