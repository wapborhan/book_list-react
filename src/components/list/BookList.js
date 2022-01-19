import React from "react";
import Book from "../represent/Book";

const BookList = (props) => {
  return props.books.map((book, index) => {
    return (
      <Book
        key={book.id}
        bookName={book.bookName}
        writter={book.writter}
        changeInpt={(event) => {
          this.changeInput(event, index);
        }}
        delete={() => {
          this.deleteBookstate(index);
        }}
      />
    );
  });
};

export default BookList;
