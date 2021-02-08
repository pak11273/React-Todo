import React, { Component } from "react";

export class TodoForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          value={this.props.value}
          name=""
          onChange={this.props.onChange}
        />
        <button onClick={this.props.addTodo}>Add Todo</button>
        <button onClick={this.props.clear}>Clear</button>
      </form>
    );
  }
}

export default TodoForm;
