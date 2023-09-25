import { useState } from "react";

// function & styling
import { useAuth } from "../context/AuthCtx";

/**
 * Login component, with loginHandler function making the API call to mockServer
 */

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (resp.ok) {
        const data = await resp.json();
        console.log("Server response data:", data); // Log the data received from the server
        const token = data.token;
        login(token);
      } else {
        console.log("Server response not OK:", resp.status, resp.statusText); // Log the response status and status text
        console.log("Wrong credentials");
      }
    } catch (error) {
      console.log("Error:", error); // Log any fetch errors
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
    </div>
  );
};

export default Login;
