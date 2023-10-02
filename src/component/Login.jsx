import { useState } from "react";

// function & styling
import { useAuth } from "../context/AuthCtx";
import userData from "../data/userData.json";

/**
 * Login component, with loginHandler checking data from userData.json (our supersafe DB)
 */

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      setMessage("Loading...");
      const user = userData.users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        const token = user.token;
        login(token);
        setMessage("You are logged in!");
      } else {
        setMessage("Wrong username or password");
        throw new Error("Wrong username or password");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
