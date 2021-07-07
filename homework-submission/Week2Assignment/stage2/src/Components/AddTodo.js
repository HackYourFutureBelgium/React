import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
  };
  render() {
    return (
      <form className="container m-5 center" onSubmit={this.handleSubmit}>
        <label htmlFor="task">Task: </label>
        <input type="text" name="name" id="description" onChange={this.handleChange} />
        <label htmlFor="deadline">Deadline: </label>
        <input
          type="date"
          name="deadline"
          id="deadline"
          min="2019-08-01"
          max="2019-12-31"
          onChange={this.handleChange}
        />
        <input type="submit" value="Add" className="btn btn-primary" />
      </form>
    );
  }
}
