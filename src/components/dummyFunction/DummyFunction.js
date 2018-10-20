import React from 'react';

const DummyFunction = ({func}) => {

    const handleClick = () => {
        func("clicking...");
    }
    
    return(
        <button title="My test button" onClick={handleClick}>
            My test button
        </button>
    );

}
export default DummyFunction;