import React, { Component } from 'react';
import axios from 'axios';

class CreateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('http://142.93.51.96/posts', this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { title, content } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
          </div>
          <div>
            <input type="text" name="content" value={content} onChange={this.changeHandler}></input>
          </div>

          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateComponent;
