import React from 'react';
import './App.css';

function App() {
  const todo = [
    {
      id: 1,
      description: "Get out of bed",
      deadline: "2019-09-11",
      done: true
    },
    {
      id: 2,
      description: "Brush teeth",
      deadline: "2019-09-10",
      done: false
    },
    {
      id: 3,
      description: "Eat breakfast",
      deadline: "2019-09-09",
      done: false
    }
  ];
  const TodoItemStatic = (props) => {
    return <li>Activity: {props.todoStaticName},<br/> Time: {props.todoStaticTime} <br/> Deadline: {props.todoStaticDeadline}</li>
  };
  const TodoItem = (props) => {
    const todoItems = props.todo1.map((item, i) =>
      <li key={i}>
        <span className= {item.done ? "done" : ""}>Activity: {item.description}</span><br/>
        <span>Deadline: {item.deadline}</span><br/>
        <span>Status: {item.done ? "Done" : "Not Yet"}</span>
      </li>);
    return <ul>{todoItems}</ul>;
  };
  class DynamicTodoList extends React.Component{
    render(){
      return (
            <article>
              <h2>My dynamic todo list</h2>
              <TodoItem todo1 = {todo}/>
            </article>
      );
    }
  }
  return (
    <div className="App">
      <section>
          <h1>My Todo List</h1>
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
    </div>
  );
}

export default App;
