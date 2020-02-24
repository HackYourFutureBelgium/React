import React, { Component } from 'react';

//import list from './TodoData';
import RandomHello from './RandemHello';

class Statictodolist extends Component {
  render() {
    return this.props.todo.map(todo => (
      <li>
        {todo.description} {todo.deadline}
      </li>
    ));
  }
}

export default Statictodolist;
