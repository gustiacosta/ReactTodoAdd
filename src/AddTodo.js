import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    function handleSubmit(event) {
      event.preventDefault();
      console.log(event.target.elements["txtAddTodo"].value);
    }

    return (
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Add new value" name="txtAddTodo" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
