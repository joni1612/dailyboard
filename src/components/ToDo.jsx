import React, { Component } from "react";
import OpenGoals from "./toDoComponents/OpenGoals";
import CreateToDo from "./toDoComponents/CreateToDo";
import PrevGoals from "./toDoComponents/PrevGoals";
import axios from "axios";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      collapse: "collapse",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/todo")
      .then((res) => {
        this.setState({
          todos: res.data,
        });
      })
      .then((res) => {
        console.log(this.state.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateListe = () => {
    this.componentDidMount();
  };

  deleteTask = (id) => {
    axios
      .delete("http://localhost:5000/todo/" + id)
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        this.setState({
          todos: this.state.todos.filter((todo) => todo._id !== id),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  showContent = () => {
    if (this.state.collapse === "collapse") {
      this.setState({
        collapse: " collapse.show",
      });
    } else {
      this.setState({
        collapse: "collapse",
      });
    }
  };

  updateStatus = (description, date, id) => {
    const todo = {
      description: description,
      date: date,
      status: true,
    };
    axios
      .post("http://localhost:5000/todo/update/" + id, todo)
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        this.updateListe();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center">Daily Goals</h1>

        <OpenGoals todos={this.state.todos} updateStatus={this.updateStatus} />

        <CreateToDo updateListe={this.updateListe} />
        <div className="text-center">
          <button
            onClick={() => {
              this.showContent();
            }}
            className="btn btn-secondary "
          >
            <h4>Previous Goals</h4>
          </button>
          <div className={this.state.collapse}>
            <PrevGoals todos={this.state.todos} deleteTask={this.deleteTask} />
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
