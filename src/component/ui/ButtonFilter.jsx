const ButtonFilter = ({ text, onClick, style }) => {
    const buttonFilterStyle = {
        borderRadius: '20px',
        padding: '8px 20px',
        color: '#fff',
        cursor: 'pointer',
        border: '1px solid #008E7E', // Lägg till en solid 1px ram med färgen #008E7E
        textTransform: 'uppercase',
        fontSize: '10px',
        ...style,
    };

    return <button style={buttonFilterStyle} onClick={onClick}>{text}</button>;
};

export default ButtonFilter;
