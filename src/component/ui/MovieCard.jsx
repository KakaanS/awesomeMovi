import defaultImage from '../../noimage.png';
import BookMark from '../BookMarkButton';
import { Link } from "react-router-dom";


const MovieCard = ({ movie }) => {
  const handleBookmarkClick = (e) => {
    e.stopPropagation(); 
  };

  const movieStyle = {
    position: 'relative',
    display: 'inline-block',
    margin: '15px',
    verticalAlign: 'top',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'left',
  };

  const imageStyle = {
    width: "222px",
  };

  const movieTitleStyle = {
    width: "100%",
    wordWrap: "break-word",
    fontSize: "14px",
    maxWidth: `${imageStyle.width}`,
  };

  const bookmarkStyle = {
    position: 'absolute',
    top: '0px',
    right: '10px',
  };

  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div style={movieStyle}>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={movie.thumbnail || defaultImage}
          alt={movie.name}
          style={imageStyle}
          onError={handleImageError}
        />
        <p style={movieTitleStyle}>{movie.title}</p>
      </Link>
      <div style={bookmarkStyle}>
        <BookMark movie={movie} onClick={handleBookmarkClick} />
      </div>
    </div>
  );
};

export default MovieCard;


