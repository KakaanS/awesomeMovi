const MovieItem = ({ movie }) => {
  return (
    <li key={movie.id}>
      <img src={movie.thumbnail} alt={movie.name} />
      <p>{movie.title}</p>
    </li>
  );
};

export default MovieItem;
