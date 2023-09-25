import React from 'react';
import RecomendedMovies from "../component/RecomendedMovies";
import Navbar from "../component/ui/Navbar";
import Title from "../component/ui/Title"; 


const Home = () => {
    return (
        <div>
            <Navbar />
            <RecomendedMovies />
            <Title />
        </div>
    )
}

export default Home;
