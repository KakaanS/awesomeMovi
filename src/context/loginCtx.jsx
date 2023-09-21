import { createContext, useState, useContext } from "react";
import Cookies from "js-cookie";

/* disable-eslint(react-refresh/only-export-components)
 */
const AuthContext = createContext();

/* disable-eslint(react-refresh/only-export-components) */
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  const login = (token) => {
    setToken(token);
    setLoggedIn(true);

    // cookie stuff, behöver lösa storing senare.
  };

  const logout = () => {
    setToken("");
    setLoggedIn(false);
  };

  // cookie stuff, behöver lösa borttagning av storing senare.

  const value = {
    loggedIn,
    token,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
