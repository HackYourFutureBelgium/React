import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          name: "test",
          done: false
        },
        {
          name: "test2",
          done: false
        }
      ]
    };
  }
  addTodo(event) {
    event.preventDefault();
  }
  generateItems() {
    return this.state.todoList.map(({ name, done }) => {
      return (
        <li>
          <input name="todo" type="checkbox" />
          <label htmlFor="todo">This is a test</label>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="app">
        <div className="content_wrapper">
          <form
            on
            onSubmit={event => this.addTodo(event)}
            className="add_todo__form"
          >
            <input placeholder="My new todo text" />
            <button tye="submit">ADD</button>
          </form>
          <div className="to_do__list_wrapper">
            <ul>
              {this.generateItems()}
              <li>
                <input name="todo" type="checkbox" />
                <label for="todo">This is a test</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
