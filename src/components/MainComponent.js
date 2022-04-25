import React, { Component } from "react";
import book from "../assets/book";
import BookList from "./list/BookList";
import BookDetails from "./represent/BookDetails";
import NewBook from "./represent/NewBook";
import Header from "./pages/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./pages/Footer";

class MainComponent extends Component {
  // state
  state = {
    books: book,
    selectedBook: null,
  };

  deleteBookstate = (index) => {
    const books = this.state.books.slice();
    // const books = this.state.books.map((item) => item);
    // const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({ books: books });
  };

  selectedBookHandler = (bookId) => {
    const book = this.state.books.filter((book) => book.id === bookId)[0];
    this.setState({
      selectedBook: book,
    });
  };

  render() {
    // const bookState = this.state.books;
    let books = (
      <BookList
        books={this.state.books}
        selectBook={this.selectedBookHandler}
        delete={this.deleteBookstate}
      />
    );

    return (
      <div className="App">
        <Header />
        {/* <div className="booklist card-deck  ">
          <Book
            bookName={this.state.books[0].bookName}
            writter={this.state.books[0].writter}
            changeInpt={this.changeInput}
          />
        </div> */}

        <Routes>
          <Route
            exact
            path="/book_list-react"
            element={
              <div className="container-flued">
                <h1 className="text-center bg-success pt-3 pb-3 text-light">
                  Book List
                </h1>

                <div className="container">
                  <div className="booklist card-deck mt-3">{books}</div>
                </div>
              </div>
            }
          />
          <Route
            path="/"
            element={<Navigate replace to="/book_list-react" />}
          />
          <Route exact path="/new-book" element={<NewBook />} />
          <Route
            exact
            path="/book/:id"
            element={<BookDetails book={this.state.selectedBook} />}
          />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default MainComponent;
