import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import ToDoList from "./components/ToDo";
import RandomQuote from "./components/RandomQuote";
import DailyImage from "./components/DailyImage";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wetter from "./components/Wetter";
// import News from "./components/News";

function App() {
  return (
    <Router>
      <div className="d-inline container-j">
        <Sidebar />
      </div>
      <div className="d-inline container-content">
        <br />
        <Route path="/" exact component={RandomQuote} />
        <Route path="/image" exact component={DailyImage} />
        <Route path="/todo" exact component={ToDoList} />
        <Route path="/weather" exact component={Wetter} />
        {/* <Route path="/news" exact component={News} /> */}
      </div>
    </Router>
  );
}

export default App;
