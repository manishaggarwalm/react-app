import React from "react";
import TodoInput from "./TodoInput";
import "./styles.css";
import Todolist from "./TodoList";

class Todo extends React.Component {
  state = {
    todo: "",
    todos: [
      { todo: "first todo", marked: false },
      { todo: "2nd todo", marked: true },
    ],
    title: "My tasks",
  };

  handleOnChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  addTask = () => {
    const { todo, todos } = this.state;

    const newTodos = [...todos];

    if (todo !== "") {
      newTodos.push({ todo: todo, marked: false });
      this.setState({ todos: newTodos, todo: "" });
    }
  };

  markTaskAsCompleted = (event, index) => {
    console.log(event.target.checked);
    const { todos } = this.state;

    const newTodos = [...todos];
    newTodos[index] = {
      ...newTodos[index],
      marked: event.target.checked,
    };

    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="TodoContainer">
        <h1 className="Header Header-Main">{this.props.title}</h1>
        <TodoInput
          taskPlaceholder="Add new Task"
          value={this.state.todo}
          onChange={this.handleOnChange}
        />
        <button onClick={this.addTask}>Add Task</button>
        <Todolist
          title={this.state.title}
          todos={this.state.todos}
          markTaskAsCompleted={this.markTaskAsCompleted}
        />
      </div>
    );
  }
}

export default Todo;
