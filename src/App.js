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
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],
      value: "",
    };
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      value,
    });
  };

  addTodo = () => {
    console.log("add");
  };

  clear = () => {
    console.log("clear");
  };

  render() {
    return (
      <>
        <h1>Todo List: MVP</h1>
        <h2>Learn setState()</h2>
        <h2>Style my Todo List</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
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
