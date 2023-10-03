import { useEffect, useState } from "react";
import movieData from "../data/movies.json";
import Category from "../component/Category";
import MovieCard from "../component/ui/MovieCard";
import Navbar from "../component/ui/Navbar";

/**
 * Renders Alist of categories and movies. Allows user to select a category to view its movies
 *
 */

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAllMovies, setShowAllMovies] = useState(true);

  // Filter the genres to extract one of each
  useEffect(() => {
    const uniqueGenres = [
      ...new Set(
        movieData
          .flatMap((movie) => movie.genre.split(", "))
          .filter((genre) => genre)
      ),
    ];
    setCategories(uniqueGenres);
  }, []);

  // Toggles the movies in category when clicked
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowAllMovies(false);
  };
  // Shows all movies from the data
  const handleShowAllMovies = () => {
    setShowAllMovies(true);
    setSelectedCategory(null);
  };

  return (
    <div>
      <Navbar />
      <h2>Categories</h2>
      <button onClick={handleShowAllMovies}>All movies</button>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
      {selectedCategory && <Category category={selectedCategory} />}
      {showAllMovies &&
        movieData.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
    </div>
  );
};

export default Categories;
