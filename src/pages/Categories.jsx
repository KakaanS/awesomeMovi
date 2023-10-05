import { useEffect, useState } from "react";
import movieData from "../data/movies.json";
import Category from "../components/Category";
import MovieCard from "../components/ui/MovieCard";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import Navbar from "../components/ui/Navbar";
import ButtonFilter from "../components/ui/ButtonFilter";
/**
 * Renders Alist of categories and movies. Allows user to select a category to view its movies
 *
 */
const CategoriesPage = () => {
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
      <Title text="Categories" />
      <Button
        onClick={handleShowAllMovies}
        text="All movies"
        style={{ margin: "20px" }}
      />
      <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}>
        {/* Display category buttons */}
        {categories.map((category, index) => (
          <div key={index} style={{ flexBasis: "10%", margin: "5px" }}>
            <ButtonFilter
              onClick={() => handleCategoryClick(category)}
              text={category}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </ul>
      {/* Display movies when a category is selected */}
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

export default CategoriesPage;
