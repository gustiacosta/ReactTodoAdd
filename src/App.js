import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import React from "react";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";

import "./App.css";

// Tutorial
// https://www.freecodecamp.org/news/react-tutorial-build-a-project/

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Clean house", done: false },
    { id: 2, text: "Whash dishes ", done: false },
    { id: 3, text: "Walk the dog", done: false },
    { id: 4, text: "Visit USA", done: false },
  ]);

  return (
    <Container className="p-3">
      <Card>
        <Card.Header>TODO List App</Card.Header>
        <Card.Body>
          <Card.Title>Todo List</Card.Title>

          <TodoList todos={todos} setTodos={setTodos} />

          <AddTodo setTodos={setTodos} />

          <Card.Text></Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
