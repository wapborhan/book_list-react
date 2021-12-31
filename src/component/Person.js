import React from "react";

function Person(props) {
  return (
    <h1>
      Name: {props.name}, Age: {props.age}
      <br />
      Bio: {props.children}
    </h1>
  );
}

export default Person;
