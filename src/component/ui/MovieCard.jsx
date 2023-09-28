import React from 'react';

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

  return (
    <div style={movieStyle}>
      <img src={movie.thumbnail} alt={movie.name} style={imageStyle} />
      <p style={movieTitleStyle}>{movie.title}</p>
    </div>
  );
};

export default MovieCard;
