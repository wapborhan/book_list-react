import React from "react";
import Book from "../represent/Book";
import { Link } from "react-router-dom";

const BookList = (props) => {
  return props.books.map((book, index) => {
    return (
      <Link
        to={"/book/" + book.id}
        key={book.id}
        style={{ textDecoration: "none" }}
      >
        <Book
          bookName={book.bookName}
          writter={book.writter}
          selectBook={() => {
            props.selectBook(book.id);
          }}
          delete={() => {
            props.delete(index);
          }}
        />
      </Link>
    );
  });
};

export default BookList;
