import React, { Component } from 'react';
import Todo from './Components/Todo';
import TodoArr from './Components/TodoArr';
import AddTodo from './Components/AddTodo';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      TodoArr: TodoArr,
    };
  }

  addTodo = todo => {
    todo.id = Math.random();
    const todos = [...this.state.TodoArr, todo];
    this.setState({
      TodoArr: todos,
    });
  };
  delTodo = id => {
    const TodoArr = this.state.TodoArr.filter(todo => todo.id !== id);
    this.setState({ TodoArr });
  };
 
 done = id => {
    console.log(id);
    console.log(this.state.TodoArr);
    const TodoArr = this.state.TodoArr.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.setState({ TodoArr });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="border text-center bg-primary shadow ">Todo App</h1>
          <AddTodo addTodo={this.addTodo} />
          <Todo TodoArr={this.state.TodoArr} delTodo={this.delTodo} done={this.done} />
        </header>
      </div>
    );
  }
}
