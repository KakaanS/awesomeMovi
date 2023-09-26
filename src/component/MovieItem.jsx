import React from 'react';
import BodyText from './ui/BodyText'; 

const MovieItem = ({ movie }) => {

  return (
    <li key={movie.id}>
      <img src={movie.thumbnail} alt={movie.title} />
      <BodyText text={movie.title} /> 
    </li>
  );
};

export default MovieItem;
