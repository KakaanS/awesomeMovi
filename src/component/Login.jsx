import { useState } from "react";
// function & styling
import { useAuth } from "../context/AuthCtx";
import userData from "../data/userData.json";
import Button from "./ui/Button";
import Title from "./ui/Title";
import InputLogin from "./ui/InputLogin";
import Form from "./ui/Form";

// Login component, with loginHandler checking data from userData.json (our supersafe DB)

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
        setMessage("You are logged in!");
        const token = user.token;
        login(token);
      } else {
        setMessage("Wrong username or password");
        throw new Error("Wrong username or password");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-container">
      <Title text="Welcome to Movi" />
      <Form onSubmit={loginHandler}>
        <InputLogin
          className="input-login"
          type="text"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputLogin
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="button-login" type="submit" text="Login" />
      </Form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
