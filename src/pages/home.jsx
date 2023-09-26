import React from 'react';
import RecomendedMovies from "../component/RecomendedMovies";
import TrendingMovies from "../component/TrendingMovies"
import SearchBox from '../component/SearchBox';
import Navbar from "../component/ui/Navbar";
import Title from "../component/ui/Title"; 


const Home = () => {
    return (
        <div>
            <Navbar />
            <SearchBox />
            <RecomendedMovies />
            <TrendingMovies />
        </div>
    )
}

export default Home;
