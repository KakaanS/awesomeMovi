import React from "react";

const MovieDetail = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>RATING: {movie.rating}</p>
      <p>ACTORS: {movie.actors}</p>
      <p>GENRE: {movie.genre}</p>
      <p>SYNOPSIS: {movie.synopsis}</p>
      <img src={movie.thumbnail} alt={movie.name} />
    </div>
  );
};

export default MovieDetail;
