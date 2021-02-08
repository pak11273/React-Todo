// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import "./Todo.css";

import React, { Component } from "react";

import { Todo } from "../components/Todo";

export class TodoList extends Component {
  render() {
    const { toggleComplete } = this.props;
    return (
      <>
        {this.props.todos.map((item, i) => {
          return (
            <Todo
              key={i}
              {...item}
              toggleComplete={() => toggleComplete(i)}
              completed={item.completed}
            />
          );
        })}
      </>
    );
  }
}

export default TodoList;
