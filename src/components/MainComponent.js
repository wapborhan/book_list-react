import React, { Component } from "react";
import book from "../assets/book";
import BookList from "./list/BookList";
import NewBook from "./represent/NewBook";
import Header from "./pages/Header";
import { Route, Routes } from "react-router-dom";

class MainComponent extends Component {
  // state
  state = {
    books: book,
  };

  deleteBookstate = (index) => {
    const books = this.state.books.slice();
    // const books = this.state.books.map((item) => item);
    // const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({ books: books });
  };

  render() {
    // const bookState = this.state.books;
    let books = (
      <BookList books={this.state.books} delete={this.deleteBookstate} />
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
            path="/"
            element={
              <div className="container-flued">
                <div className="row">
                  <div className="col-lg-12">
                    <h1 className="text-center bg-success pt-3 pb-3 text-light">
                      Book List
                    </h1>
                  </div>
                </div>
                <div className="container">
                  <div className="booklist card-deck mt-3">{books}</div>
                </div>
              </div>
            }
          />
          <Route exact path="/new-book" element={<NewBook />} />
        </Routes>
      </div>
    );
  }
}

export default MainComponent;
