const ButtonBookmark = ({ text }) => {
    const buttonBookmarkStyle = {
        backgroundColor: '#008E7E',
        color: '#fff',
        cursor: 'pointer',
        textTransform: 'uppercase',
        borderRadius: '0px',
        padding: '7px',
    };

    return <button style={buttonBookmarkStyle}>{text}</button>;
};

export default ButtonBookmark;