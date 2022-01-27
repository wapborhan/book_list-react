import "./stylesheets/Main.css";
import MainComponent from "./components/MainComponent";
// import MainPerson from "./components/MainPerson";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <MainComponent />
      {/* <MainPerson /> */}
    </BrowserRouter>
  );
};

export default App;
