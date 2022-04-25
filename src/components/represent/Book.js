import React from "react";
import "../../stylesheets/Book.css";

const Book = (props) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title" onClick={props.selectBook}>
          Book: {props.bookName}
        </h5>
        <p className="card-text">Writter: {props.writter}</p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-danger rounded" onClick={props.delete}>
          X
        </button>
      </div>
    </div>
  );
};

export default Book;
