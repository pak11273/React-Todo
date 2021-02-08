import React, { Component } from "react";

export class Todo extends Component {
  render() {
    const { task } = this.props;
    return <div>{task}</div>;
  }
}

export default Todo;
