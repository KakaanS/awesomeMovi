const Form = ({ children, onSubmit }) => {
    const formContainerStyle = {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    };

    const formStyle = {
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <div style={formContainerStyle}>
            <form onSubmit={onSubmit} style={formStyle}>
                {children}
            </form>
        </div>
    );
};

export default Form;
