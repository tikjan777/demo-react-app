import React from "react";

function Person(props) {
  const name = props.name;
  const surname = props.surname;
  return (
    <div>
      <h1>Welcome!</h1>
      <p>My name is {name}</p>
    </div>
  );
}

export default Person;