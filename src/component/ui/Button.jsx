const Button = ({ text, onClick, style }) => {
  const buttonStyle = {
    backgroundColor: '#008E7E',
    borderRadius: '20px',
    padding: '8px 20px',
    color: '#fff',
    cursor: 'pointer',
    textTransform: 'uppercase',
    ...style, 
  };

  return <button style={buttonStyle} onClick={onClick}>{text}</button>;
};

export default Button;
