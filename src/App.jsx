import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.jsx";
import Categories from "./pages/Categories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
