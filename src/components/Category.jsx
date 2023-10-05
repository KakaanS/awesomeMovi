import MovieCard from "./ui/MovieCard"; // Importera din nya komponent
import movieData from "../data/movies.json";
import Subheading from "./ui/Subheading";

// Displays all the movies from a specific category

const Category = ({ category }) => {
  const moviesInCategory = movieData.filter((movie) =>
    movie.genre.split(", ").some((genre) => genre === category)
  );
  return (
    <div>
      <Subheading text={category} />
      {moviesInCategory.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Category;
