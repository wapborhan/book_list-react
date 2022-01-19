import react, { Component } from "react";
import Book from "./Book";

class MainComponent extends Component {
  // state
  state = {
    books: [
      { id: 1, bookName: "Alo", writter: "Borhan Uddin" },
      { id: 2, bookName: "Poth", writter: "Rabby Biswas" },
      { id: 3, bookName: "Somoi", writter: "MahMud Hasan" },
    ],
    showBooks: true,
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

  toogleBooks = () => {
    this.setState({ showBooks: !this.state.showBooks });
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
    let books = null;
    if (this.state.showBooks) {
      books = this.state.books.map((book, index) => {
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
    }

    // console.log(books);

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.toogleBooks}>Toogle Books</button>
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

export default MainComponent;
