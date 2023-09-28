import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.jsx";
import Categories from "./pages/Categories";
import MovieDetailPage from "./pages/MovieDetail";
function App() {
  return (
    <Routes>
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/awesomeMovi/" element={<Home />} />
      <Route path="/awesomeMovi/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;