import React from 'react';

const BodyText = ({ text }) => {
    const BodyTextStyle = {
        padding: '10px 10px',
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
        position: 'relative',
        textSize: '10px'
    };
  

    return (
        <p style={BodyTextStyle}>
            {text}
        </p>
    );
};

export default BodyText;