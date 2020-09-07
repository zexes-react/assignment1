import React from 'react';

import './UserOutput.css';


const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>my name is: {props.username} an awesome guy</p>
            <p>I am going to see {props.currentName}</p>
        </div>
    )
}

export default userOutput;