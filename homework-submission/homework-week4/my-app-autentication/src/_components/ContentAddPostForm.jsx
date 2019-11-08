import React from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const email = values.email;
      const password = values.password;

      axios.post(`http://142.93.51.96/login`, { email, password })
        .then(res => {
          this.props.setUser({ token: res.data });

        })
    });
  };

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }


  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const emailError = isFieldTouched('email') && getFieldError('email');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      < Form onSubmit={this.handleSubmit} className="login-form" >
        <Form.Item validateStatus={emailError ? 'error' : ''} >
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please!, input your E-mail!',
              },
            ],
          })(<Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="email"
            placeholder="E-mail" />)}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please!, input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button"
            disabled={hasErrors(getFieldsError())}>
            Log in
          </Button>
          Or <a href=".">register now!</a>
        </Form.Item>
      </Form >
    );
  }
};

const UserLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default UserLoginForm;
