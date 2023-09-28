import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.jsx";
import Categories from "./pages/Categories";
import PageLogin from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/awesomeMovi/" element={<Home />} />
      <Route path="/awesomeMovi/categories" element={<Categories />} />
      <Route path="/awesomeMovi/login" element={<PageLogin />} />
    </Routes>
  );
}

export default App;
