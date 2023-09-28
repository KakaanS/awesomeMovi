import React from 'react';

const SearchbarInput = ({ value, onChange }) => {
    const SearchbarStyle = {
        padding: '15px',
        textAlign: 'left',
        margin: '40px',
        backgroundColor: 'white',
        width: '40%',
        borderRadius: '50px',
        outline: 'none',
        border: 'none',

 };

    return (
        <input
            style={SearchbarStyle}
            type="text"
            placeholder="Search for a movie..."
            value={value}
            onChange={onChange}
        />
    );
};

export default SearchbarInput;
