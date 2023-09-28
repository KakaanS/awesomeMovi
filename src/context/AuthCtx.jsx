import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const storedToken = Cookies.get("token");

    if (storedToken) {
      setUser({ token: storedToken });
      console.log("Found token", storedToken);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    if (user && user.token) {
      console.log(user.token);
      navigate("/");
    }
  }, [navigate, user]);

  const login = (token) => {
    try {
      Cookies.set("token", token, { expires: 7, secure: true });
      setUser({ token: token });
      navigate("/");
      console.log(token);
    } catch (error) {
      console.error("Failed to log in:", error);
    }
    console.log("logged in and set token", token);
  };

  const logout = () => {
    try {
      Cookies.remove("token");
      setUser(null);
      navigate("/login");
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
