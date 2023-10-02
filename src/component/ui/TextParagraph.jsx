const TextParagraph = ({ children }) => {
    const paragraphStyle = {
        color: '#008E7E',
    };

    return <p style={paragraphStyle}>{children}</p>;
};

export default TextParagraph;