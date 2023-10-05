import "../../mobilecss/button.css";

const Button = ({ text, onClick }) => {
  return (
    <button className="button-style" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
