import React from 'react';
function Name(props){
    const {name} = props;

    return(
        <p>
            My name is {name}!
        </p>    
    )
}

export default Name;