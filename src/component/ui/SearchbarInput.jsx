import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchbarInput = ({ value, onChange, placeholder, type }) => {
  const SearchbarContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  };

  const SearchbarStyle = {
    padding: '15px',
    textAlign: 'left',
    backgroundColor: 'white',
    borderRadius: '50px',
    width: '40%',
    outline: 'none',
    border: 'none', 
  };

  const iconStyle = {
    color: '#000000',
  };

  return (
    <div style={SearchbarContainerStyle}>
      <div style={SearchbarStyle}>
        <FontAwesomeIcon icon={faSearch} style={iconStyle} />
        <input
          style={{
            border: 'none',
            paddingLeft: '10px',
            outline: 'none',
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
