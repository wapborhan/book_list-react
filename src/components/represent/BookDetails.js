import React from "react";

function BookDetails(props) {
  if (props.book === null) return <div></div>;
  return (
    <div className="container">
      <div className="card mt-4 w-75 mx-auto">
        <div className="card-header">
          <h1>
            ( {props.book.id} ) - {props.book.bookName}
          </h1>
        </div>
        <div className="card-body">{props.book.description}</div>
      </div>
    </div>
  );
}

export default BookDetails;
