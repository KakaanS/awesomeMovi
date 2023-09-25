import { useEffect, useState } from "react";
import movieData from "../data/movies.json";

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
  console.log(categories)

  return (
   <div>
      <h3>categories: </h3>
      {categories.map((category, index) => <p key={index}>{category}</p>)}
   </div>

   );
};

export default Categories;
