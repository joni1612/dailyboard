import React from "react";

const PrevGoals = (props) => {
  return props.todos
    .filter((todo) => todo.status === true)
    .map((todo) => {
      return (
        <div className="text-center" key={todo._id}>
          <h5 className="d-inline">
            <del>{todo.description}</del>
          </h5>
          <button
            onClick={() => {
              props.deleteTask(todo._id);
            }}
            className="btn btn-outline-danger d-inline"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      );
    });
};
export default PrevGoals;
