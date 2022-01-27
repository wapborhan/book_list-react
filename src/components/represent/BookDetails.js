import React from "react";

function BookDetails(props) {
  if (props.book === null) return <div></div>;
  return (
    <div>
      <h1>
        ( {props.book.id} ) - {props.book.bookName}
      </h1>
      <p>{props.book.description}</p>
    </div>
  );
}

export default BookDetails;
