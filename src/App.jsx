import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.jsx";
import Categories from "./pages/Categories";
import MovieDetailPage from "./pages/MovieDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
    </Routes>
  );
}

export default App;
