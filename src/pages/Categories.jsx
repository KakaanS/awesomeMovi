import { useEffect, useState } from "react";
import movieData from "../data/movies.json";
import Category from "../component/Category";

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
      <h2>Categories</h2>
      {categories.map((category, index) => <Category key={index} category={category}/>)}
   </div>

   );
};

export default Categories;
