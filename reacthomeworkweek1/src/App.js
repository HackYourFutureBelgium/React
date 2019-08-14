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
  const LabelInput = ({labeltext, type, name, value, onChange, className= " "}) => {
    return (
      <label htmlFor={name} className={className}>
        {labeltext}
        <input type={type} name={name} id={name} onChange={onChange} value={value}/>
        <br />
      </label>
    );
  };
  class FormTodo extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name: "",
        date: "",
        status: ""
      };
    }
    handleNameChange = (e) => {
      this.setState({name: e.target.value});
    };
    handleDateChange = (e) => {
      this.setState({date: e.target.value});
    };
    handleStatusChange = (e) => {
      this.setState({status: e.target.value});
    };
    handleSubmit = e => {
      e.preventDefault();
      api.addTodo({
        name: this.state.name,
        date:this.state.date,
        status: false
      });
      console.log(this.state);
    };
    render(){
      return (
        <form onSubmit={this.handleSubmit} action="" method="POST">
          <p>Please insert todo list for Alfi</p>
          <LabelInput type = {"text"} labeltext={"To do :"} name={"extraTodoName"} value={this.state.name} onChange={this.handleNameChange}/>
          <LabelInput type = {"date"} labeltext={"Deadline :"} name={"extraTodoDeadline"} value={this.state.date} onChange={this.handleDateChange}/>
          <LabelInput type = {"text"} labeltext={"Status:"} name={"extraIsDone"} value={this.state.status} onChange={this.handleStatusChange}/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  class TodoView extends React.Component{
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
      <TodoView />
      <FormTodo />
    </div>
  );
}

export default App;
