import React from "react";
import "../../stylesheets/Book.css";

const Book = (props) => {
  return (
    <div className="book-item">
      <h3>Book: {props.bookName}</h3>
      <h4>Writter: {props.writter}</h4>
      <input type="text" onChange={props.changeInpt} value={props.bookName} />
      <button className="dlt" onClick={props.delete}>
        X
      </button>
    </div>
  );
};

export default Book;
