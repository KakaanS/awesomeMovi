import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import CategoriesPage from "./pages/Categories";
import LoginPage from "./pages/Login";
import MovieDetailPage from "./pages/MovieDetail";
import BookMarksPage from "./pages/BookMarks";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/bookmark" element={<BookMarksPage />} />
    </Routes>
  );
}

export default App;
