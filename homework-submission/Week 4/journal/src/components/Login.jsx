import React from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button, Alert } from 'antd';
import '../components/Components.css';


function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { error: 0, loading: 0, iconLoading: 0 };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const email = values.email;
      const password = values.password;

      axios.post(`http://142.93.51.96/login`, { email, password })
        .then(res => {
          this.props.setUser({ token: res.data });
        })
        .catch(err => this.setState({ error: 1, loading: 0, iconLoading: 0 }))
    });
  };

  componentDidMount() {
    // Disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const emailError = isFieldTouched('email') && getFieldError('email');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <div className="loginContainer">
        <>
        {
          this.state.error === 1 ?
            <Alert
              message="Error, Check your e-mail or password." type="error" showIcon
            /> : null
        }

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
                  message: 'Type your E-mail!',
                },
              ],
            })(<Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="email"
              placeholder="E-mail" />)}
          </Form.Item>
          <Form.Item validateStatus={passwordError ? 'error' : ''}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Type your Password your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item alignitem="center">
            <Button type="primary" htmlType="submit" className="login-form-button"
              disabled={hasErrors(getFieldsError())}
              icon="poweroff"
              loading={this.state.iconLoading}
              onClick={this.enterIconLoading}
            >
              Log in
          </Button>
            <br/> <a href=".">register now!</a>
          </Form.Item>
        </Form >
      </>
      </div>
    );
  }
};

const Login = Form.create({ name: 'normal_login' })(LoginForm);

export default Login;