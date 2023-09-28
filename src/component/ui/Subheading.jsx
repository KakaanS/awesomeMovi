import React from 'react';

const Subheading = ({ text }) => {
    const SubheadingStyle = {
        padding: '10px',
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'left',
        position: 'relative',

    };

    const lineStyle = {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '10px',
        width: '15%',
        height: '1px',
        backgroundColor: '#008E7E',
    };

    return (
        <h3 style={SubheadingStyle}>
            {text}
            <span style={lineStyle}></span>
        </h3>
    );
};

export default Subheading;
