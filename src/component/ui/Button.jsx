import "../../mobilecss/button.css";

const Button = ({ text, onClick }) => {
  return (
    <button className="buttonStyle" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
