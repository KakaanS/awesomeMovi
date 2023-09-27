import React from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../component/MovieDetail";
import dataBase from "../data/movies.json";

const MovieDetailPage = () => {
  const { id } = useParams();
  const movieId = parseInt(id); // Parse the ID as a number

  // Find the movie based on the parsed ID
  const selectedMovie = dataBase.find((movie) => movie.id === movieId);

  return <div>{selectedMovie && <MovieDetail movie={selectedMovie} />}</div>;
};

export default MovieDetailPage;
