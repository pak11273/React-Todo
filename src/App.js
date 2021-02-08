import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
      id: 0,
    };
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  addTodo = () => {
    this.setState(
      {
        todos: [
          ...this.state.todos,
          { completed: false, id: this.state.id, task: this.state.value },
        ],
      },
      () => {
        let newId = this.state.id + 1;
        this.setState({
          id: newId,
        });
      }
    );
  };

  clear = () => {
    console.log("clear");
  };

  toggleComplete = (currentTodoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === currentTodoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <>
        <h1>Todo List: MVP</h1>
        <h2>Learn setState()</h2>
        <h2>Style my Todo List</h2>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          onSubmit={this.onSubmit}
          value={this.state.value}
          onChange={this.onChange}
          addTodo={this.addTodo}
          clear={this.clear}
        />
      </>
    );
  }
}

export default App;
