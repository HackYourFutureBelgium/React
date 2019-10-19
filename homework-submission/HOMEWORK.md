# Homework Submission

All homework should be within this directory, and this directory only. Please place your homework in a directory anywhere at `/homework-submission/*`, eg: `/homework-submission/my-project/package.json`.

Homework is then submitted via PR in the normal way.

Homework will not be reviewed unless:

1. Your PR _only_ modifies the `homework-submission` directory
2. Your PR passes linting




import React, {Component} from 'react'

export class TodoItem extends Component {
    getStyle =() => {
        return {
         backgroung: '#f4f4f4',
         padding: '10px',
         borderBottom: '1px #ccc dotted',
    }
}
render() {
    return (
        <div style={this.getStyle()}>
            <p>{this.props.todo.title}</p>

        </div>
    )
}

export default TodoItem




import React,{Component} from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
   render() {
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id}todo={todo}/>
    ));
   }
}

export default Todos;



import React,{Component} from 'react';
import Todos from './Components/Todos';

import './App.css';

class App extends Component {
 state = {
   todos: [
     {
       id:1,
       task:'Get out of bed',
       completed: false
     },
     {
       id:2,
       task:'Brush teeth',
       completed: false
     },
     {
       id:3,
       task:'Eat breakfast',
       completed:false
     }
   ]
 }
 render() {
  
  return (
    <div className="App">
      <Todos todos={this.state.todos}/>
     
    </div>
  );
 }


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

a {
  color: #333;
  text-decoration: none;
}



