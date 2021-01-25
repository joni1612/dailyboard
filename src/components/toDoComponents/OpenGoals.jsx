import React from "react";
const OpenGoals = (props) => {
  return props.todos
    .filter((todo) => {
      return todo.status === false;
    })
    .map((todo) => {
      return (
        <div key={todo._id} className="text-center">
          <label className="form-check-label">
            <h5>{todo.description}</h5>{" "}
          </label>
          <button
            onClick={() => {
              props.updateStatus(todo.description, todo.date, todo._id);
            }}
            className="btn btn-outline-success"
          >
            <i className="bi bi-check2-circle"></i>
          </button>
        </div>
      );
    });
};

export default OpenGoals;
