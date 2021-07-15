import React from 'react';

const ColorHello = (props) => {
    return (
        <h1 
            style={{backgroundColor: props.backgroundColor, color: props.textColor }}
            >Hello
        </h1>
    )
}

export default ColorHello;