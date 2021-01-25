import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import ToDoList from "./components/ToDo";
import RandomQuote from "./components/RandomQuote";
import DailyImage from "./components/DailyImage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <RandomQuote />
      <ToDoList />
      <DailyImage />
    </div>
  );
}

export default App;
