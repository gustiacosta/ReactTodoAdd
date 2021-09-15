import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const todoArr = this.props;
    return (
      <ul>
        {todoArr.todos.map((todo) => (
          <li key={todo.id}>
            {todo.id} - {todo.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
