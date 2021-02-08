import React, { Component } from "react";

export class Todo extends Component {
  render() {
    const { task, toggleComplete, completed } = this.props;
    return (
      <div className={completed ? "toggle" : ""} onClick={toggleComplete}>
        {task}
      </div>
    );
  }
}

export default Todo;
