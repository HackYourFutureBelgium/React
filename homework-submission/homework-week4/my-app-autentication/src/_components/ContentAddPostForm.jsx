import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const title = values.title;
      const content = values.description;

      let login = JSON.parse(localStorage.getItem('userValueInLocalStorage'));
      const options = {
        headers: { 'Authorization': login.token }
      };

      axios.post(`http://142.93.51.96/posts`, { title, content }, options)
        .then(res => {
          this.props.setNewPosts(res.data);
        })
        .catch(err => console.log(err))
    });
  };

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }


  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const titleError = isFieldTouched('title') && getFieldError('title');
    const descriptionError = isFieldTouched('description') && getFieldError('description');

    return (
      < Form onSubmit={this.handleSubmit} className="login-form" >
        <Form.Item validateStatus={titleError ? 'error' : ''}>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please!, input a Title!' }],
          })(
            <Input
              type="text"
              placeholder="Title" />)}
        </Form.Item>
        <Form.Item validateStatus={descriptionError ? 'error' : ''}>
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Please!, input a Description!' }],
          })(
            <Input.TextArea
              type="text"
              placeholder="Description" />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button"
            disabled={hasErrors(getFieldsError())}>
            Add
          </Button>
        </Form.Item>
      </Form >
    );
  }
};

const UserLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default UserLoginForm;
