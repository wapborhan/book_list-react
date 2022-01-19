import { Component } from "react";
import Person from "./components/Person";
// Funtion Component
// function MainPerson() {
//   //JSX Format
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <Person />
//     </div>
//   );

//   // React Format
//   return React.createElement(
//     "div",
//     { className: "App" },
//     React.createElement("h1", null, "Hello World")
//   );
// }

// Class Component
class MainPerson extends Component {
  render() {
    return (
      <div className="App">
        <h1>Info's</h1>
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

export default MainPerson;
