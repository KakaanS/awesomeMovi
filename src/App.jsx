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
      <Route path="/login" element={<PageLogin />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/bookmark" element={<BookMarks />} />
    </Routes>
  );
}

export default App;
