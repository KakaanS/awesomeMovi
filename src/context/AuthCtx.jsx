import { createContext, useContext } from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const justLoggedIn = useRef(false);

  const login = (token) => {
    try {
      Cookies.set("token", token, { expires: 7, secure: true });
      setUser({ token });
      justLoggedIn.current = true;
    } catch (error) {
      console.error("Failed to log in:", error);
    }
  };

  useEffect(() => {
    const storedToken = Cookies.get("token");

    if (storedToken) {
      setUser({ token: storedToken });
    } else {
      navigate("/awesomeMovi/login");
    }
  }, [navigate]);

  useEffect(() => {
    if (user && justLoggedIn.current) {
      navigate("/awesomeMovi/");
      justLoggedIn.current = false;
    }
  }, [user]);

  const logout = () => {
    try {
      Cookies.remove("token");
      setUser(null);
      navigate("/awesomeMovi/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
