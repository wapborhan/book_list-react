import "./App.css";
import React from "react";
import Person from "./component/Person";
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
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Info</h1>
        <Person name="Borhan" age="26">
          Developer
        </Person>
        <Person name="Rabby" age="25">
          Desinger
        </Person>
      </div>
    );
  }
}

export default App;
