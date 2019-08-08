import React from 'react';
import './App.css';
import api from './api';
window.api = api;

function App() {

  const TodoItemStatic = (props) => {
    return <li>Activity: {props.todoStaticName},<br/> Time: {props.todoStaticTime} <br/> Deadline: {props.todoStaticDeadline}</li>
  };
  const TodoItem = (props) => {
    const todoItems = props.todo1.map((item, i) =>
      <li key={i}>
        <span className={`highlight ${item.done ? "done" : ""}`}>Activity: {item.activity}</span><br/>
        <span>Deadline: {item.deadline}</span><br/>
        <span>Status: {item.done ? "Done" : "Not Yet"}</span>
      </li>);
    return <ul>{todoItems}</ul>;
  };
  class FormExtraTodoInput extends React.Component{
    render(){
      return (
        <form action="" method="POST">
    <label>
      To do :
      <input type="text" name="extraTodoName" />
    </label>
    < br/>
    <label>
      Deadline :
      <input type="date" name="extraTodoDeadline"/>
    </label>
    < br/>
    <input type="submit" value="Submit" />
  </form>
      );
    }
  }
  class DynamicTodoList extends React.Component{
    constructor(props){
      super(props);
      this.state = {todo: []};
    }
    componentDidMount(){
      api.fetchList().then(list => this.setState({todo: list}));
    }
    render(){
      return (
            <article>
              <h2>My dynamic todo list</h2>
              <TodoItem todo1 = {this.state.todo}/>
            </article>
      );
    }
  }
  return (
    <div className="App">
      <section>
          <h1>Alfi's To Do List</h1>
          <article>
            <h2>My static todo list</h2>
            <ul>
              <TodoItemStatic  todoStaticName = "Get out of bed" todoStaticTime = "09:00" todoStaticDeadline= "Wed Aug 1 2019"/>
              <TodoItemStatic  todoStaticName = "Brush teeth" todoStaticTime = "09:10" todoStaticDeadline= "Wed Aug 1 2019"/>
              <TodoItemStatic  todoStaticName = "Change clothes" todoStaticTime = "09:15" todoStaticDeadline= "Wed Aug 1 2019"/>
              <TodoItemStatic  todoStaticName = "Eat breakfast" todoStaticTime = "09:15" todoStaticDeadline= "Wed Aug 1 2019"/>
            </ul>
          </article>
      </section>
      <DynamicTodoList />
      <FormExtraTodoInput />
    </div>
  );
}

export default App;
