import React from 'react';

const Title = ({ text }) => {
    const TitleStyle = {
        padding: '10px 10px',
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
        width: '30%',
        height: '1px',
        backgroundColor: '#008E7E',
    };

    return (
        <h2 style={TitleStyle}>
            {text}
            <span style={lineStyle}></span>
        </h2>
    );
};

export default Title;
