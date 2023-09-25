const Login = () => {
  const loginHandler = (e) => {
    e.preventDefault();
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
