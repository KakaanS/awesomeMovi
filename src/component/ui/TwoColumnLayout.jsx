const TwoColumnLayout = ({ children, imageSrc, imageAlt }) => {
    const containerStyle = {
        display: 'flex',
        padding: '20px',
        justifyContent: 'space-between'
    };

    const textContainerStyle = {
        flex: '1',
        maxWidth: '50%',
    };

    const imageStyle = {
        flex: '1',
        maxWidth: '25%',
        paddingRight: '10%',
    };

    return (
        <div style={containerStyle}>
            <div style={textContainerStyle}>
                {children}
            </div>
            <img src={imageSrc} alt={imageAlt} style={imageStyle} />
        </div>
    );
};

export default TwoColumnLayout;
