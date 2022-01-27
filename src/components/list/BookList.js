import React from "react";
import Book from "../represent/Book";

const BookList = (props) => {
  return props.books.map((book, index) => {
    return (
      <Book
        key={book.id}
        bookName={book.bookName}
        writter={book.writter}
        selectBook={() => {
          props.selectBook(book);
        }}
        delete={() => {
          props.delete(index);
        }}
      />
    );
  });
};

export default BookList;
