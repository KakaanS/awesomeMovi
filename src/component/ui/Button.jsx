const Button = ({ text }) => {
  const buttonStyle = {
    backgroundColor: '#008E7E',
    borderRadius: '20px',
    padding: '10px 20px',
    color: '#fff', 
    cursor: 'pointer', 
    textTransform: 'uppercase',
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default Button;