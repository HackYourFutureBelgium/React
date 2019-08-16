import React from 'react';
import './App.css';
import api from './api';
import moment from 'moment';
window.api = api;

function App() {
  const TodoList = (props) => {
    const todoItems = props.todo1.map((item, i) =>
      <li key={i}>
        <TodoItem item = {item}/>
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

  const DeleteButton = (props) => <button onClick={props.onClick}>Delete</button>;
  const EditButton = (props) => <button  onClick={props.onClick}>Edit</button>;

  class TodoItem extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        editing: false
      }
    }
    handleClickRemove = () => {
      api.deleteTodo(this.props.item.id);
    };
    handleClickEdit = () => {
      const item = this.props.item;
      this.setState({
        editing: true,
        name: item.activity,
        deadline: moment(item.deadline).format('YYYY-MM-DD'),
        status: item.is_done
      });
    };
    handleSave = (e) => {
      e.preventDefault();
      api.editTodo(this.props.item.id, this.state.name, this.state.deadline, parseInt(this.state.status));
    };
    handleNameChange = (e) => {
      this.setState({name: e.target.value});
    };
    handleDateChange = (e) => {
      this.setState({deadline: e.target.value});
    };
    handleStatusChange = (e) => {
      this.setState({status: e.target.value});
    };
    render(){
      const item = this.props.item;
      if(this.state.editing){
        return (
          <form onSubmit={this.handleSave}>
            <p>Please fill your edit version</p>
            <LabelInput type = {"text"} labeltext={"To do :"} name={"extraTodoName"} value={this.state.name} onChange={this.handleNameChange}/>
            <LabelInput type = {"date"} labeltext={"Deadline :"} name={"extraTodoDeadline"} value={this.state.deadline} onChange={this.handleDateChange}/>
            <LabelInput type = {"text"} labeltext={"Status:"} name={"extraIsDone"} value={this.state.status} onChange={this.handleStatusChange}/>
            <input type="submit" value="Save" />
          </form>
        );
      }
      return (
        <>
          <span className={`highlight ${item.is_done ? "done" : ""}`}>Activity: {item.activity}</span><br/>
          <span>Deadline: {moment(item.deadline).format("MMM Do YY")}</span><br/>
          <span>Status: {item.is_done ? "Done" : "Not Yet"}</span>
          <br />
          <EditButton onClick = {this.handleClickEdit}/>
          <DeleteButton onClick = {this.handleClickRemove} />
        </>
      );

    }
  }
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

    };
    render(){
      return (
        <form onSubmit={this.handleSubmit}>
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
              <TodoList todo1 = {this.state.todo}/>
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
