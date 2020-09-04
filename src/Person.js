import React from 'react';
import Surname from './Surname';
import Name from './Name';
function Person (props) {
    const name = props.name;
    const {surname} = props;
  
    return (
      <>
        <h1>Welcome!</h1>
        <Name name={name}/>
        <Surname surname={surname} />
      </>
    );
  }
  export default Person;