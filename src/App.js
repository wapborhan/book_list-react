import "./App.css";
import React from "react";
import Person from "./components/Person";
import Book from "./components/Book";
import { Component } from "react/cjs/react.production.min";
//Funtion Component
// function App() {
//   //JSX Format
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <Person />
//     </div>
//   );

//React Format
// return React.createElement(
//   "div",
//   { className: "App" },
//   React.createElement("h1", null, "Hello World")
// );
//}

//Class Component
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Info's</h1>
//         <Person name="Borhan" age="26">
//           Developer
//         </Person>
//         <Person name="Rabby" age="25">
//           Desinger
//         </Person>
//       </div>
//     );
//   }
// }

class App extends Component {
  // state
  state = {
    books: [
      { id: 1, bookName: "Alo", writter: "Borhan Uddin" },
      { id: 2, bookName: "Poth", writter: "Rabby Biswas" },
      { id: 3, bookName: "Somoi", writter: "MahMud Hasan" },
    ],
  };
  // changebookState = (newBook) => {
  //   this.setState({
  //     books: [
  //       { bookName: newBook, writter: "Borhan Uddin" },
  //       { bookName: "Amader somoi", writter: "Rabby Biswas" },
  //       { bookName: "Polish", writter: "Farhabi Islam" },
  //     ],
  //   });
  // };
  changeInput = (event, index) => {
    const book = {
      ...this.state.books[index],
    };
    book.bookName = event.target.value;

    const books = [...this.state.books];
    books[index] = book;

    this.setState({ books: books });
  };

  deleteBookstate = (index) => {
    const books = this.state.books.slice();
    // const books = this.state.books.map((item) => item);
    // const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({ books: books });
  };

  render() {
    const style = {
      border: "1px solid #000",
      borderRadius: "10px",
      backgroundColor: "green",
      color: "red",
      width: "90%",
      margin: "20px auto",
    };

    // const bookState = this.state.books;

    const books = this.state.books.map((book, index) => {
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

    // console.log(books);

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        {/* <button
          onClick={this.changebookState.bind(this, "Sukher Paira Koire??")}
        >
          Change Book
        </button> */}
        <br />
        {/* <input type="text" onChange={this.changeInput} /> */}
        <div className="booklist">
          {books}

          {/* <Book
            bookName={this.state.books[0].bookName}
            writter={this.state.books[0].writter}
            changeInpt={this.changeInput}
          />
          <Book
            bookName={this.state.books[1].bookName}
            writter={this.state.books[1].writter}
          />
          <Book
            bookName={this.state.books[2].bookName}
            writter={this.state.books[2].writter}
            change={this.changebookState}
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
