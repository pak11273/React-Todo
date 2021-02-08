import React, { Component } from "react";

// todo
// - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
// - Once a todo is submitted, the Todo List should re-render and show the added todo.
export class TodoForm extends Component {
  render() {
    return (
      <>
        <input type="text" value="" name="" onChange={this.props.onChange} />
        <button onClick={this.props.addTodo}>Add Todo</button>
        <button onClick={this.props.clear}>Clear</button>
      </>
    );
  }
}

export default TodoForm;
