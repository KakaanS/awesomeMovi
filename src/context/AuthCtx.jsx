import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken) {
      setUser({ token: storedToken });
    }
    console.log("Found token", storedToken);
  }, []);

  const login = (token) => {
    Cookies.set("token", token, { expires: 7 }); // 7 days to expiration (rätt säker)
    console.log("logged in and set token", token);
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    console.log("logged out and removed token");
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
