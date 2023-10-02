import React from 'react';
import BookMark from '../BookMark';
import defaultImage from '../../noimage.png';


const MovieCard = ({ movie }) => {
  const movieStyle = {
    display: 'inline-block',
    margin: '15px',
    verticalAlign: 'top',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'left',
  };

  const imageStyle = {
    width: '222px'
  };

  const movieTitleStyle = {
    width: '100%',
    wordWrap: 'break-word',
    fontSize: '14px',
    maxWidth: `${imageStyle.width}`,
  };

  const handleImageError = (e) => {
    e.target.src = defaultImage;
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
      <BookMark />
    </div>
  );
};

export default MovieCard;
