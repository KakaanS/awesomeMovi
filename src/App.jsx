import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home.jsx";
import Login from "./component/Login";

/**
 *
 * @returns Lägg till conditinal rendering här för att visa Home när man loggat in eller Login när användaren inte är autentisierad. Tex element= {token ? <Home /> : <Navigate to='/login'}
 */
const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Login />} />)
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
