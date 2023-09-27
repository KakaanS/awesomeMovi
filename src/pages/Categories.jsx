import { useEffect, useState } from "react";
import movieData from "../data/movies.json";
import Category from "../component/Category";
import Navbar from "../component/ui/Navbar";
import Title from "../component/ui/Title";

/**
 *
 * @returns All categories including all the movies with the category
 */

const Categories = () => {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div>
      <h2>Categories</h2>
      {categories.map((category, index) => (
        <div key={index}>
          <div  onClick={() => handleCategoryClick(category)}>
            {category}
          </div>
          {selectedCategory === category && (
            <Category key={index} category={category}/>
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;

// 
