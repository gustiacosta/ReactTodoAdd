import React from "react";

function AddTodo({ setTodos }) {
  const inputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    //console.log(event.target.elements["txtAddTodo"].value);

    let min = 1;
    let max = 100;

    const todo = {
      id: Math.ceil(min + Math.random() * (max - min)),
      text: event.target.elements["txtAddTodo"].value,
      done: false,
    };

    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });

    inputRef.current.value = "";
    //event.target.elements["txtAddTodo"].value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="Add new value"
        name="txtAddTodo"
        ref={inputRef}
      />
      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddTodo;
