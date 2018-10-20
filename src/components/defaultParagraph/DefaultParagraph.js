import React from 'react';

const DefaultParagraph = ({text, color}) => {
    return(
        <p style={{color: color}}>
            {text}
        </p>
    );
}

export default DefaultParagraph;