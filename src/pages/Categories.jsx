import { useState } from "react";
import movieData from "../data/movies.json"

const Categories = () => {
   const [categories, setCategories] = useState([]);

 const uniqueGenres =[ 
        ...new Set (movieData
          .flatMap((movie) => movie.genre.split(", "))
          .filter((genre) => genre))]

    console.log(uniqueGenres)

    return (
        <div>
            Hello world
        </div>
    )
}

export default Categories
