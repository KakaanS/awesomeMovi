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

  useEffect(() => {
    const uniqueGenres = [
      ...new Set(
        movieData
          .flatMap((movie) => movie.genre.split(", "))
          .filter((genre) => genre)
      ),
    ];
    setCategories(uniqueGenres)
  }, [])

  return (
    <div>
      <Navbar />
      <Title text="Categories" /> 
      {categories.map((category, index) => <Category key={index} category={category} />)}
    </div>

  );
};

export default Categories;
