import React from 'react';


const userInput = (props) => {
    const inputStyle ={
        border: '2px solid red',
        width: '40%',
        marginLeft: '20%'
    }

    return <input type="text" onChange={props.changed} value={props.username} style={inputStyle}/>;

};

export default userInput;