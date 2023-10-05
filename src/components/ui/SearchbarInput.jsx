import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../mobilecss/searchbar-container.css";

const SearchbarInput = ({ value, onChange, placeholder, type }) => {
  return (
    <div className="searchbar-container-style">
      <div className="searchbar-style">
        <FontAwesomeIcon icon={faSearch} className="icon-style" />
        <input
          style={{
            border: "none",
            paddingLeft: "10px",
            outline: "none",
          }}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SearchbarInput;
