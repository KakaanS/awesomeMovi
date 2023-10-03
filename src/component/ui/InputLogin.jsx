const InputLogin = ({ type, value, onChange, placeholder }) => {
    const LoginInputContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70px',
        marginBottom: '15px',
    };

    const LoginInputStyle = {
        padding: '15px',
        textAlign: 'left',
        backgroundColor: 'white',
        borderRadius: '50px',
        outline: 'none',
        border: 'none',
    };

    return (
        <div style={LoginInputContainerStyle}>
            <input
                style={LoginInputStyle}
                type={type}
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                autoComplete="off"
            />
        </div>
    );
};

export default InputLogin;
