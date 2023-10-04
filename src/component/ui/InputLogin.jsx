import "../../mobilecss/input-login.css";

const InputLogin = ({ type, value, onChange, placeholder }) => {
  return (
    <div className="LoginInputContainerStyle">
      <input
        className="LoginInputStyle"
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
