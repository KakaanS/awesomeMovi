import RecomendedMovies from "../component/RecomendedMovies";
import TrendingMovies from "../component/TrendingMovies";
import SearchBox from "../component/SearchBox";
import Navbar from "../component/ui/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchBox />
      <RecomendedMovies />
      <TrendingMovies />
    </div>
  );
};

export default Home;
