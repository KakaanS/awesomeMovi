import  { useState } from 'react';
import BookMark from '../BookMark';
import defaultImage from '../../noimage.png';

const MovieCard = ({ movie }) => {
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
    width: '222px',
  };

  const movieTitleStyle = {
    width: '100%',
    wordWrap: 'break-word',
    fontSize: '14px',
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

  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };

  return (
    <div style={movieStyle}>
      <img
        src={movie.thumbnail || defaultImage}
        alt={movie.name}
        style={imageStyle}
        onError={handleImageError}
      />
      <p style={movieTitleStyle}>{movie.title}</p>
      <div style={bookmarkStyle}>
        <BookMark onClick={toggleBookmark} isBookmarked={isBookmarked} />
      </div>
    </div>
  );
};

export default MovieCard;
