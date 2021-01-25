import React, { Component } from "react";
import axios from "axios";

class CreateToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: " ",
      status: false,
      date: new Date(),
    };
  }

  onChangeTask = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const task = {
      description: this.state.description,
      date: Date().toLocaleString(),
      status: false,
    };
    axios
      .post("http://localhost:5000/todo/add", task)
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        this.setState({
          description: " ",
        });
        this.props.updateListe();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h3 className="text-center">Set Daily Goals</h3>
        <form className={"input-group mb-3"} onSubmit={this.onSubmit}>
          {/* <div className="form-group"> */}

          <input
            type="text"
            className="form-control"
            value={this.state.description}
            onChange={this.onChangeTask}
          />
          {/* </div> */}

          {/* <div className="form-group"> */}
          <div className="input-group-append">
            <input
              type="submit"
              value="Set Goal"
              className="btn btn-outline-secondary"
            />
            {/* </div> */}
          </div>
        </form>
      </div>
    );
  }
}

export default CreateToDo;
