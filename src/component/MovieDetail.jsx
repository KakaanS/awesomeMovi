import React from "react";
import Navbar from "../component/ui/Navbar";
const MovieDetail = ({ movie }) => {
  return (
    <div>
      <Navbar />
      <SearchBox />
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
