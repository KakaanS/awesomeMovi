import "../../mobilecss/input-login.css";

const InputLogin = ({ type, value, onChange, placeholder }) => {
  return (
    <div className="login-input-container-style">
      <input
        className="login-input-style"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
};

export default InputLogin;
