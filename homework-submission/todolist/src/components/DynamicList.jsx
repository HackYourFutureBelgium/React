import React, { Component } from 'react';

export class TodoData extends Component {
  render() {
    return this.props.Dynamic_List.map((Dynamic_List, key) => (
      <li>
        {Dynamic_List.description} {Dynamic_List.deadline}
      </li>
    ));
  }
}

export default TodoData;
