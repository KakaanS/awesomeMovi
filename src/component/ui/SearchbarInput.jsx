const SearchbarInput = ({ value, onChange, placeholder, type}) => {
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
    width: '40%',
    borderRadius: '50px',
    outline: 'none',
    border: 'none',
  };

  return (
    <div style={SearchbarContainerStyle}>
      <input
        style={SearchbarStyle}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchbarInput;
