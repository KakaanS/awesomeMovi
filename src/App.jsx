import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import PageLogin from "./pages/Login";
import MovieDetailPage from "./pages/MovieDetail";
import BookMarks from "./pages/BookMarks";
function App() {
  return (
    <Routes>
      <Route path="/awesomeMovi/login" element={<PageLogin />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/awesomeMovi/" element={<Home />} />
      <Route path="/awesomeMovi/categories" element={<Categories />} />
      <Route path="/awesomeMovi/bookmark" element={<BookMarks />} />
    </Routes>
  );
}

export default App;
