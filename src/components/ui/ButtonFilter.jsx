import "../../mobilecss/button-filter.css";

const ButtonFilter = ({ text, onClick }) => {
  return (
    <button className="buttonFilterStyle" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonFilter;
