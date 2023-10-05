import "../../mobilecss/button-filter.css";

const ButtonFilter = ({ text, onClick }) => {
  return (
    <button className="button-filter-style" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonFilter;
