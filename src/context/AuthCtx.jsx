import { createContext, useContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

//diable-eslint(react-refresh/only-export-components)
export const useAuth = () => {
  return useContext(AuthContext);
};

// Disable ESLint for the children prop
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (token) => {
    // set token to be stored in a cookie

    setUser({ token });
  };

  const logout = () => {
    // remove token from cookie

    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
