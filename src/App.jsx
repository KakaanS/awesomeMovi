import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.jsx";
import Categories from "./pages/Categories";
import PageLogin from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/login" element={<PageLogin />} />
    </Routes>
  );
}

export default App;
