import movieData from "../data/movies.json";
import MovieItem from "./MovieItem";

const Category = ({ category }) => {
  const moviesWithCategory = movieData.filter((movie) =>
    movie.genre.split(", ").some((genre) => genre === category)
  );

  return (
    <div>
      <h3>{category}</h3>
      <ul>
        {moviesWithCategory.map((movie) => (
          <MovieItem movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Category;
