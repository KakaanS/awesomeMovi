const Title = ({ text }) => {
    const TitleStyle = {
        padding: '10px 10px',
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'left',
        position: 'relative',
    };

    return (
        <h2 style={TitleStyle}>
            {text}
        </h2>
    );
};

export default Title;
