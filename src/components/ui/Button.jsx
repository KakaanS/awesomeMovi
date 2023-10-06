import "../../mobilecss/button.css";

const Button = ({ text, onClick }) => {
  return (
    <button className="button-style" onClick={onClick}>
      {text}
    </button>
  );
};

const ButtonLogin = ({ text, onClick }) => {
  return (
    <button className="button-style-login" onClick={onClick}>
      {text}
    </button>
  );
};

export { Button, ButtonLogin };
