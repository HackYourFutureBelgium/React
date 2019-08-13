import React from 'react';
import './App.css';
import api from './api';
import moment from 'moment';
window.api = api;

function App() {
  const TodoItem = (props) => {
    const todoItems = props.todo1.map((item, i) =>
      <li key={i}>
        <span className={`highlight ${item.is_done ? "done" : ""}`}>Activity: {item.activity}</span><br/>
        <span>Deadline: {moment(item.deadline).format("MMM Do YY")}</span><br/>
        <span>Status: {item.is_done ? "Done" : "Not Yet"}</span>
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
      <DynamicTodoList />
      <FormExtraTodoInput />
    </div>
  );
}

export default App;
