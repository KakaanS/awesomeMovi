import React from 'react';

const Movie = ({ movie }) => {
  const movieStyle = {
    display: 'inline-block', 
    margin: '10px', 
    verticalAlign: 'top', 
  };

  const imageStyle = {
    width: '200px'
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

export default Movie;
