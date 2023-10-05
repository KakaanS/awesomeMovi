import { createContext, useContext } from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const justLoggedIn = useRef(false);

  const login = (token) => {
    try {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 1);
      setCookie("token", token, { expires: expirationDate, secure: true });
      justLoggedIn.current = true;
    } catch (error) {
      console.error("Failed to log in:", error);
    }
  };

  useEffect(() => {
    if (cookies.token && justLoggedIn.current) {
      navigate("/");
      justLoggedIn.current = false;
    } else if (!cookies.token) {
      navigate("/login");
    }
  }, [cookies, navigate]);

  const logout = () => {
    try {
      removeCookie("token");
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const value = {
    user: cookies.token ? { token: cookies.token } : null,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
