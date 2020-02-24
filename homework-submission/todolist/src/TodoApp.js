import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import './App.css';
import Statictodolist from './components/TodolistContainer';
import TodoData from './components/DynamicList';
class App extends Component {
  list = {
    todo: [
      {
        description: 'Get out of bed',
        deadline: 'Wed Sep 13 2017',
      },
      {
        description: 'Brush teeth',
        deadline: 'Thu Sep 14 2017',
      },
      {
        description: 'Eat breakfast',
        deadline: 'Fri Sep 15 201',
      },
    ],
    Dynamic_List: [
      {
        id: 1,
        description: 'Get out of bed',
        deadline: '2017-09-11',
        done: true,
      },
      {
        id: 2,
        description: 'Brush teeth',
        deadline: '2017-09-10',
        done: false,
      },
      {
        id: 3,
        description: 'Eat breakfast',
        deadline: '2017-09-09',
        done: false,
      },
    ],
  };
  render() {
    return (
      <div className="thisIsWhereReactIsInjected">
        <h3>Dynamic list</h3>
        <Statictodolist todo={this.list.todo} />
        <h3>Dynamic list</h3>
        <TodoData Dynamic_List={this.list.Dynamic_List} />
      </div>
    );
  }
}

export default App;
