import React from 'react';

const Device = (props) => {
    return (
        <div>
            <h1>I have: {props.name}</h1>
            <p>Price: {props.price}</p>
        </div>
    );
};

export default Device;