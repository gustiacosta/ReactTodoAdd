import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function App() {
  const todos = [
    { id: 1, text: "Clean house", done: false },
    { id: 2, text: "Whash dishes ", done: false },
    { id: 3, text: "Walk the dog", done: false },
    { id: 4, text: "Visit USA", done: false },
  ];

  return (
    <div className="App">
      <h1>Todo List</h1>

      <TodoList todos={todos} />

      <AddTodo />
    </div>
  );
}

export default App;
